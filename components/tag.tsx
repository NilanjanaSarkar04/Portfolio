/**
 * Tag — thin wrapper that re-exports shadcn Badge.
 * Kept for backwards-compatibility; prefer importing Badge directly.
 */
import { Badge } from "@/components/ui/badge";

interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return <Badge variant="default">{label}</Badge>;
}
