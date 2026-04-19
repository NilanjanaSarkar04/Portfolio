interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="inline-block px-3 py-1 text-[11px] font-mono tracking-widest uppercase rounded-full bg-tag-bg text-tag-text border border-border">
      {label}
    </span>
  );
}
