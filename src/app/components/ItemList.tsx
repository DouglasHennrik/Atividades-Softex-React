export function ItemList({ itens }: { itens: string[] }) {
    return (
      <div className="mt-8">
        <ul className="list-disc list-inside text-lg">
          {itens.map((item, index) => (
            <li key={index} className="text-purple-800">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }