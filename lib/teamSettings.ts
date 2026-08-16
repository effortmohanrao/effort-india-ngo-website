import { getR2Text, uploadToR2 } from "@/lib/r2";

const SETTINGS_KEY = "config/team-settings.json";

export type TeamSocials = {
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
};

export type TeamSettings = {
  socials: Record<string, TeamSocials>; // keyed by team member slug
  updatedAt: string;
};

export const defaultTeamSettings: TeamSettings = { socials: {}, updatedAt: "" };

export async function getTeamSettings(): Promise<TeamSettings> {
  const text = await getR2Text(SETTINGS_KEY);
  if (!text) return defaultTeamSettings;
  try {
    const saved = JSON.parse(text);
    return { ...defaultTeamSettings, ...saved, socials: { ...(saved.socials ?? {}) } };
  } catch {
    return defaultTeamSettings;
  }
}

export async function saveTeamSettings(settings: TeamSettings) {
  const body = JSON.stringify({ ...settings, updatedAt: new Date().toISOString() }, null, 2);
  await uploadToR2(SETTINGS_KEY, Buffer.from(body, "utf-8"), "application/json");
}
