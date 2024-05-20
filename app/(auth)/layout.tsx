import {Logo} from "@/components/Logo";

export default function LayoutAuth({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Logo/>
        <h1 className="text-3xl my-2">
          Welcome to my Dashboard!
        </h1>
        {children}
      </div>
    );
  }
  