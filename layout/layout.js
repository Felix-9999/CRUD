export default function Layout( { children }){
    return (
           <div >
           <div>
                <div className="right flex flex-col justify-evenly">
                    <div className="text-center py-10">
                        {children}
                    </div>
                </div>
            </div>
            </div>
    )
}
