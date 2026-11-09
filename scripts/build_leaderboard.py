"""Regenerate data/leaderboard.js from the OCTAVE repository's results.

Usage: python3 scripts/build_leaderboard.py <octave-bench>/results/leaderboard.csv > data/leaderboard.js
Input: results/leaderboard.csv written by scoring/leaderboard.py in rezona-ai/octave-bench.
"""
import csv, sys, json

ORG = {  # model_key -> org; display names come from the CSV and follow the paper's Table 6
    "cc_deepseek_flash_41": "DeepSeek",
    "cc_deepseek_v4_flash": "DeepSeek",
    "cc_fable_5": "Anthropic",
    "cc_fable_5_1": "Anthropic",
    "cc_glm_5_2": "Zhipu AI",
    "cc_glm_5_3": "Zhipu AI",
    "cc_opus_5": "Anthropic",
    "codex_deepseek_v4_pro": "DeepSeek",
    "codex_gpt_5_5": "OpenAI",
    "codex_gpt_5_6_sol": "OpenAI",
    "codex_gpt_6_astra": "OpenAI",
}
SELF_EVAL = {"codex_gpt_6_astra"}  # evaluator is the same model
CAPS = [f"C{i}" for i in range(1, 9)]
UPDATED = "2026-10-24"

p = lambda x: round(float(x) * 100, 1)
rows = []
for r in csv.DictReader(open(sys.argv[1], encoding="utf-8-sig")):
    k = r["model"]
    rows.append({"model": r["model_name"], "org": ORG[k], "key": k, "harness": r["harness"],
                 "selfEval": k in SELF_EVAL,
                 "completeness": p(r["completeness"]), "richness": p(r["richness"]),
                 "gateFail": p(r["gate_fail_rate"]), "caps": {c: p(r[c]) for c in CAPS}})
rows.sort(key=lambda e: -e["completeness"])

print(f"""// 排行榜数据：由 scripts/build_leaderboard.py 从 octave-bench 的 results/leaderboard.csv 生成（数据版本 {UPDATED}）。
// completeness = 公开要求通过率，richness = 隐藏要求通过率，gateFail = 门禁失败或缺产物比例，
// caps = C1–C8 primary capability 下的要求通过率。数值均为 0–100，保留 1 位小数。
window.BENCH = window.BENCH || {{}};

BENCH.leaderboard = {{
  updated: "{UPDATED}",
  note: "All 1,980 records (11 combinations × 180 tasks, one final record each) are scored; a record that fails the static gate or has no artifact scores zero on every public and hidden requirement. Fixed-sample descriptive results; no confidence intervals. The judge is stricter than human play-testing, so absolute pass rates are best read as a lower bound; differences between systems remain informative. † The evaluator is the same model.",
  entries: [""")
for e in rows:
    print("    " + json.dumps(e, ensure_ascii=False) + ",")
print("  ],\n};")
