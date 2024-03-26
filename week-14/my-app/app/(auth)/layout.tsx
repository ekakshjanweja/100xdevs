interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <div>
        <p className="flex items-center justify-center text-lg text-lime-500 font-semibold">
          Auth
        </p>
        {children}
      </div>
    </>
  );
}

export default AuthLayout;
