import HeaderComponent from "@/components/layout/Header/Header"
import Aside from "@/components/layout/Aside/Aside"
import FooterComponent from "@/components/layout/Footer/Footer"
export default function MarketingLayout({ children, } : LayoutProps<"/">) {
    return (
        <>
            <HeaderComponent />
            <Aside />
            {children}
            <FooterComponent />
        </>
    )
}
