const TAG_KEYWORDS: Record<string, string[]> = {//Event tagging file/system helped by cursor
  exam: ["exam", "midterm", "final", "test", "quiz"],
  assignment: ["assignment", "homework", "hw", "problem set", "pset", "lab"],
  project: ["project", "milestone", "presentation"],
};

export function parseUserTags(tagText: string): Set<string> {
  return new Set(
    tagText
      .split(",")
      .map((tag) => tag.trim().toLowerCase())
      .filter((tag) => tag.length > 0)
  );
}

export function inferTagsFromText(...texts: string[]): Set<string> {
  const joined = texts.join(" ").toLowerCase();
  const inferred = new Set<string>();

  for (const [tag, keywords] of Object.entries(TAG_KEYWORDS)) {
    if (keywords.some((keyword) => joined.includes(keyword))) {
      inferred.add(tag);
    }
  }

  return inferred;
}

export function mergeTags(...sets: Set<string>[]): Set<string> {
  const merged = new Set<string>();
  sets.forEach((set) => {
    set.forEach((tag) => merged.add(tag));
  });
  return merged;
}
