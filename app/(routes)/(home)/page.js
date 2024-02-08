import Header from "../../components/header"
import Banner from "../../components/home/banner"
import About from "../../components/home/about"
import Products from "../../components/home/products"
import BlogHome from "../../components/home/blogs"
const Home = ()=>{
    return (
        <div className="w-full flex flex-col overflow-x-hidden h-full overflow-y-scroll">
            <Header />
            <div className="min-h-[105px] w-full"></div>
            <Banner />
            <About />
            <Products />
            <BlogHome />
        </div>
    )
}

export default Home