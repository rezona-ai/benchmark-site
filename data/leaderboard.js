// 排行榜数据：由 scripts/build_leaderboard.py 从 octave-bench 的 results/leaderboard.csv 生成（数据版本 2026-10-24）。
// completeness = 公开要求通过率，richness = 隐藏要求通过率，gateFail = 门禁失败或缺产物比例，
// caps = C1–C8 primary capability 下的要求通过率。数值均为 0–100，保留 1 位小数。
window.BENCH = window.BENCH || {};

BENCH.leaderboard = {
  updated: "2026-10-24",
  note: "All 1,980 records (11 combinations × 180 tasks, one final record each) are scored; a record that fails the static gate or has no artifact scores zero on every public and hidden requirement. Fixed-sample descriptive results; no confidence intervals. † The evaluator is the same model.",
  entries: [
    {"model": "GPT-6-astra", "org": "OpenAI", "key": "codex_gpt_6_astra", "harness": "Codex CLI", "selfEval": true, "completeness": 57.1, "richness": 47.6, "gateFail": 13.3, "caps": {"C1": 57.2, "C2": 45.4, "C3": 57.2, "C4": 54.7, "C5": 52.5, "C6": 51.1, "C7": 57.6, "C8": 53.4}},
    {"model": "Fable 5.1", "org": "Anthropic", "key": "cc_fable_5_1", "harness": "Claude Code", "selfEval": false, "completeness": 44.7, "richness": 38.2, "gateFail": 17.8, "caps": {"C1": 43.4, "C2": 38.2, "C3": 45.1, "C4": 38.3, "C5": 45.0, "C6": 42.4, "C7": 41.2, "C8": 42.5}},
    {"model": "Fable 5", "org": "Anthropic", "key": "cc_fable_5", "harness": "Claude Code", "selfEval": false, "completeness": 39.0, "richness": 36.4, "gateFail": 21.1, "caps": {"C1": 40.8, "C2": 33.9, "C3": 43.2, "C4": 39.3, "C5": 33.5, "C6": 34.8, "C7": 36.5, "C8": 40.2}},
    {"model": "Opus 5", "org": "Anthropic", "key": "cc_opus_5", "harness": "Claude Code", "selfEval": false, "completeness": 37.2, "richness": 38.5, "gateFail": 16.1, "caps": {"C1": 44.2, "C2": 31.2, "C3": 39.8, "C4": 29.3, "C5": 40.5, "C6": 40.8, "C7": 29.4, "C8": 39.7}},
    {"model": "GPT-5.6-sol", "org": "OpenAI", "key": "codex_gpt_5_6_sol", "harness": "Codex CLI", "selfEval": false, "completeness": 33.4, "richness": 31.5, "gateFail": 16.7, "caps": {"C1": 40.5, "C2": 26.3, "C3": 36.7, "C4": 28.9, "C5": 33.9, "C6": 27.7, "C7": 27.1, "C8": 32.8}},
    {"model": "GLM-5.3", "org": "Zhipu AI", "key": "cc_glm_5_3", "harness": "Claude Code", "selfEval": false, "completeness": 31.1, "richness": 31.8, "gateFail": 21.7, "caps": {"C1": 34.4, "C2": 25.3, "C3": 36.0, "C4": 27.4, "C5": 32.2, "C6": 33.1, "C7": 24.7, "C8": 33.9}},
    {"model": "GPT-5.5", "org": "OpenAI", "key": "codex_gpt_5_5", "harness": "Codex CLI", "selfEval": false, "completeness": 26.9, "richness": 27.9, "gateFail": 15.6, "caps": {"C1": 32.7, "C2": 19.7, "C3": 35.6, "C4": 25.4, "C5": 26.0, "C6": 26.6, "C7": 25.9, "C8": 23.0}},
    {"model": "DeepSeek-V4.1-Flash", "org": "DeepSeek", "key": "cc_deepseek_flash_41", "harness": "Claude Code", "selfEval": false, "completeness": 25.9, "richness": 27.6, "gateFail": 20.6, "caps": {"C1": 32.7, "C2": 19.1, "C3": 33.3, "C4": 23.4, "C5": 20.7, "C6": 27.7, "C7": 20.0, "C8": 31.6}},
    {"model": "GLM-5.2", "org": "Zhipu AI", "key": "cc_glm_5_2", "harness": "Claude Code", "selfEval": false, "completeness": 24.3, "richness": 25.8, "gateFail": 26.7, "caps": {"C1": 31.2, "C2": 20.4, "C3": 31.4, "C4": 21.9, "C5": 22.3, "C6": 25.0, "C7": 11.8, "C8": 23.6}},
    {"model": "DeepSeek-V4-Flash-0731", "org": "DeepSeek", "key": "cc_deepseek_v4_flash", "harness": "Claude Code", "selfEval": false, "completeness": 23.5, "richness": 26.9, "gateFail": 26.7, "caps": {"C1": 31.8, "C2": 19.7, "C3": 24.6, "C4": 22.9, "C5": 25.2, "C6": 26.1, "C7": 15.3, "C8": 25.9}},
    {"model": "DeepSeek-V4-Pro", "org": "DeepSeek", "key": "codex_deepseek_v4_pro", "harness": "Codex CLI", "selfEval": false, "completeness": 22.2, "richness": 25.3, "gateFail": 22.8, "caps": {"C1": 26.9, "C2": 17.8, "C3": 28.0, "C4": 23.9, "C5": 25.2, "C6": 16.9, "C7": 20.0, "C8": 25.3}},
  ],
};
