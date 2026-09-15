const BreadCrumbNav = ({label}) => {
    return <nav aria-label="Breadcrumb" className="flex items-center space-x-1 text-sm mb-4 text-gray-500">
    <ol className="flex items-center flex-wrap gap-1">
        <li className="flex items-center">
            <a className="hover:text-brand-600 transition-colors" href="/">
                <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-home w-3.5 h-3.5 inline mr-1" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    Home</span>
            </a>
        </li>
        <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right w-3.5 h-3.5 opacity-50 mx-1 flex-shrink-0" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
            <span aria-current="page" className="font-medium">{label}</span>
        </li>
    </ol>
</nav>
}

export default BreadCrumbNav;