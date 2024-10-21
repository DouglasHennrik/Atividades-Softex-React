export function MyButton({ onClick }: { onClick: () => void }) {
    return (
      <div className="mt-8">
        <button
          onClick={onClick}
          className="px-4 py-2 bg-purple-800 text-white rounded-lg"
        >
          Clique aqui
        </button>
      </div>
    );
  }