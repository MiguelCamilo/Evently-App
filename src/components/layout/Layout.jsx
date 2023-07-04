import MainNavigation from "./MainNavigation"

const Layout = ({ children }) => {

    return (
        <div>
            <MainNavigation />
            <main className="flex flex-col justify-center items-center bg-[#f4f5f6] w-full"> 
                {children}
            </main>
        </div>
    )
}

export default Layout