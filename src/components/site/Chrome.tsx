export function MetaRow({ index, label }: { index: string; label: string }) {
  return (
    <div className="meta-row">
      <span>• ({index})</span>
      <span>({label})</span>
      <span className="text-right">© Yakın Boğaz</span>
    </div>
  );
}

const steps = [1, 2, 2, 1, 0, 2, 3, 1, 2, 0, 1, 3, 2, 1, 0, 2];

export function Checker() {
  return (
    <div className="flex items-end bg-bg" aria-hidden>
      {steps.map((count, index) => (
        <div key={index} className="flex flex-1 flex-col justify-end">
          {Array.from({ length: count }).map((_, cell) => (
            <div key={cell} className="aspect-square bg-paper" />
          ))}
        </div>
      ))}
    </div>
  );
}
