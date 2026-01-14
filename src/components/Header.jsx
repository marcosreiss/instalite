


export default function Header({ username }) {
  return (
    <header className="bg-white border-b border-instalite-border sticky top-0 z-50">
      <div className="max-w-[935px] mx-auto px-5 h-[60px] flex items-center justify-between">
        <h1 className="text-[28px] font-semibold text-instalite-dark">
          InstaLite
        </h1>

        {username && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-instalite-primary to-instalite-secondary flex items-center justify-center">
              <span className="text-white text-sm font-semibold">
                {username.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className="text-sm font-semibold text-instalite-dark hidden sm:block">
              {username}
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
