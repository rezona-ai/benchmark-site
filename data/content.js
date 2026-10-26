// 结构化的页面内容。来源：论文 H5_benchmark (5).pdf 与 2026-10-24 统一数据。
window.BENCH = window.BENCH || {};

// 首屏下方数字条
BENCH.stats = [
  { value: "180", label: "Tasks" },
  { value: "1,800", label: "Requirements" },
  { value: "8", label: "Capability dimensions" },
  { value: "11", label: "Model–harness pairs" },
];

// 设计原则。key 为小标签（像素字体显示）
BENCH.desiderata = [
  { key: "Coverage", title: "Built around capabilities", desc: "Every task is annotated with the game-development capabilities it exercises, and the suite is constructed so that all eight dimensions, C1–C8, are covered." },
  { key: "Depth", title: "Public and hidden requirements", desc: "Each task has six public Completeness requirements and four hidden Richness requirements that probe deeper relationships, edge cases and cross-system coupling." },
  { key: "Realism", title: "Real sources, real platforms", desc: "Tasks come from player requests, commercial-mechanics reconstructions and expert designs, and span PC Web and Mobile Web, 2D and 3D." },
];

// 与已有 benchmark 对比。true/false 渲染为 ✓/✗，字符串原样显示
BENCH.comparison = {
  columns: ["Benchmark", "Capability-controlled", "Richness", "Mobile Web", "Complete game", "Tasks", "Requirements"],
  rows: [
    ["GameDevBench", false, false, false, false, "333", "—"],
    ["OpenGame-Bench", false, false, false, true, "150", "—"],
    ["V-GameGym", false, false, false, true, "2,219", "2,219†"],
    ["GameGen-Verifier", false, false, false, true, "100", "—"],
    ["GameCraft-Bench", false, true, false, true, "140", "2,305"],
    ["WebGameBench", false, false, false, true, "111", "111†"],
    ["GameXpert-Bench (GameGen)", false, true, false, true, "97", "—"],
    ["GameEngine-Bench", false, false, false, false, "110", "—"],
    { highlight: true, cells: ["OCTAVE (Ours)", true, true, true, true, "180", "1,800"] },
  ],
};

// 任务类别及数量
BENCH.families = [
  { name: "Action", count: 30 },
  { name: "Strategy", count: 34 },
  { name: "Adventure & Puzzle", count: 31 },
  { name: "Simulation & Sandbox", count: 45 },
  { name: "Social & Tabletop", count: 16 },
  { name: "RPG", count: 24 },
];
BENCH.suiteSplit = [
  { label: "PC Web", count: 95 }, { label: "Mobile Web", count: 85 },
  { label: "2D", count: 91 }, { label: "3D", count: 89 },
];

// 示例任务（与 octave-bench data/octave_180_en.jsonl 中的英文文本一致）
BENCH.exampleTask = {
  id: "hard_action_rpg_3d_017",
  tags: "RPG · 3D · PC Web",
  prompt: `[Game] AI-Directed Dynamic Dungeon: an invisible director adjusts pressure to the player's condition, while squads with distinct roles reroute through destructible walls.

[Core mechanics] A multilevel dungeon contains rooms, destructible walls, and enemy squads. The director continually observes health, resources, progress rate, and kill efficiency, increasing pressure during efficient progress and easing off and providing supplies when the player is near death; spawn intervals create peaks and troughs. Squads include tanks, ranged attackers, and healers. Both player and enemy routes update when walls are blasted open. Reaching the core wins; death loses.

[Required] Efficient and endangered players receive different spawn intensities in comparative runs; sustained danger produces supplies or slower spawning; the spawn sequence has peaks and troughs; the three roles act according to their responsibilities; blasted walls create traversable passages that enemies use; every floor is connected, win/loss handling is complete, and the seed yields consistent results.

[Creative freedom] The number of roles, dungeon theme, equipment, and additional events are unrestricted; original designs are encouraged.`,
};

// 评测流程步骤
BENCH.evalSteps = [
  { title: "Generate", desc: "Each of 11 model–harness combinations (Claude Code or Codex CLI) builds every task from an empty workspace within 120 minutes. One final record is kept per model and task." },
  { title: "Static gate", desc: "The evaluator checks entry files, dependencies and execution paths in the source to decide whether the project can run." },
  { title: "Source judge", desc: "Given the specification and source, the evaluator marks every public and hidden requirement as pass or fail with evidence." },
  { title: "Human cross-check", desc: "Requirement judgments on a limited sample are compared with human playtesting to locate disagreement." },
  { title: "Score all records", desc: "All 1,980 records count. A gate failure or missing artifact scores zero on all ten requirements." },
];

// 能力维度 C1–C8（key 需与 leaderboard.js 中 caps 的字段一致）
BENCH.rubrics = [
  { key: "C1", title: "Core Rules", desc: "Game rules, state transitions, core mechanics, and win/loss conditions." },
  { key: "C2", title: "AI/NPC", desc: "NPC behavior, decision logic, and autonomous system behavior." },
  { key: "C3", title: "Numerical Design", desc: "Attributes, resources, economies, progression, and numerical relationships." },
  { key: "C4", title: "Interaction and Input", desc: "Player input, interaction mapping, and game controls." },
  { key: "C5", title: "Levels and Scenes", desc: "Spatial organization, levels, scenes, and game progression." },
  { key: "C6", title: "Animation and Rendering", desc: "Rendering, animation, and dynamic visual states." },
  { key: "C7", title: "Feedback and Game Feel", desc: "Visual, auditory, and state feedback related to actions and game events." },
  { key: "C8", title: "Guidance and Meta-UI", desc: "Tutorials, prompts, HUDs, menus, pausing, and end states." },
];

// 主要发现。stat 为大号数字（可选），image 为配图（可选）
BENCH.findings = [
  { title: "Delivering a working project is the first bottleneck", stat: "19.9%", statLabel: "of 1,980 records fail the static gate or have no artifact",
    desc: "Rates range from 13.3% for GPT-6-astra to 26.7% for GLM-5.2 and DeepSeek-V4-Flash-0731. Across combinations, this rate is strongly negatively associated with Completeness and Richness (Spearman's ρ ≈ −0.70 and −0.72); GPT-5.5 is the exception, with a low gate-failure rate but low pass rates.", wide: true },
  { title: "No non-self-evaluated combination passes half the requirements", stat: "44.7 / 38.5", statLabel: "best Completeness (Fable 5.1) / best Richness (Opus 5) without self-evaluation",
    desc: "Overall Completeness is 33.2% and Richness 32.5%; excluding GPT-6-astra, whose evaluator is the same model, they are 30.8% and 31.0%." },
  { title: "Task source changes which layer is harder",
    desc: "Player requests score 28.4% / 27.8% (Completeness / Richness), commercial-mechanics reconstructions 53.1% / 47.4%, and expert-designed tasks 66.2% / 73.6%. Richness is higher only on expert-designed tasks.",
    image: "static/images/figures/finding-source.png" },
  { title: "AI/NPC and feedback loops are the clearest gaps",
    desc: "C1 Core Rules (37.8%) and C3 Numerical Design (37.4%) have the highest combined pass rates; C2 AI/NPC (27.0%) and C7 Feedback and Game Feel (28.1%) the lowest. The pattern holds under multilabel aggregation and without self-evaluation.",
    image: "static/images/figures/finding-capability.png" },
  { title: "Mobile scores higher than PC everywhere",
    desc: "Mobile has a lower gate-failure rate (12.4% vs. 26.6%) and higher Completeness / Richness (38.6% / 41.8% vs. 28.4% / 24.2%), for all 11 combinations and all eight capabilities. The direction holds on the shared-source subset; task content and protocols still differ between tracks.",
    image: "static/images/figures/finding-platform.png" },
];
