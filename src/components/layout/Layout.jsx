import MainNavigation from "./MainNavigation"

const Layout = ({ children }) => {

    return (
        <div>
            <MainNavigation />
            <main className="flex flex-col justify-start items-center min-h-screen bg-[#f4f5f6] w-full"> 
                {children}
            </main>
        </div>
    )
}

export default Layout