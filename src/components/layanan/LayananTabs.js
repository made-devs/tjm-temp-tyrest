export default function LayananTabs({ groups, activeTab, onTabChange }) {
  return (
    <div className="mb-12">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 pb-2 md:justify-center">
          {groups.map((group, index) => (
            <button
              key={group.brand}
              onClick={() => onTabChange(index)}
              className={`font-jakarta font-bold text-sm px-6 py-3 whitespace-nowrap transition-colors duration-300 ${
                activeTab === index
                  ? "bg-red-600 text-white"
                  : "bg-[#111] border border-gray-800 text-gray-300 hover:bg-gray-800"
              }`}
            >
              {group.brand}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
