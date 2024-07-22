import { useNavigate } from "react-router-dom";

export const PreJoinLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col">
      <div className="px-8 py-4 border-b flex items-center justify-between">
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate(`/`);
          }}
        >
          <span className="font-bold">🤗 Logo</span>
        </div>
        <div></div>
      </div>

      <div className="container p-8 h-full">{children}</div>
    </div>
  );
};
