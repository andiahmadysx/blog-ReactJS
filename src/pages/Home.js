import { useState } from "react";
import data from '../DataBlog.json';
function Home() {
    const [searchValue, setSearchValue] = useState("");

    function displayAlert(e) {
        alert("Blog tentang " + e + " belum tersedia!")
    }
    return (
        <>
            <header>
                <nav className="home-nav">
                    <img src="assets/image/1-des-2022/logo.png" className="logo" />
                    <input id='searchInput' type='text' placeholder='Cari Blog...' onChange={(event) => {
                        setSearchValue(event.target.value)
                    }} />
                </nav>
            </header>
            <main>
                <section className="container">
                    <div className="blog-wrapper">
                        {
                            data
                                .filter((el) => {
                                    if (searchValue === "") {
                                        return el;
                                    } else if (el.title.toLowerCase().includes(searchValue.toLowerCase())) {
                                        return el;
                                    }
                                })
                                .map((el) => {
                                    if (el.status === "finish") {
                                        return (
                                            <div className='blog' key={el.id}>
                                                <a href={el.url}>
                                                    <img src={el.image} alt={el.title}/>
                                                    <h6 className="writter">{el.writter}</h6>
                                                    <h4 className="title-blog">{el.title}</h4>
                                                    <p className="deskripsi-blog">{el.description}</p>
                                                </a>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className='blog' key={el.id} onClick={displayAlert.bind(this, el.title)}>
                                                <img src={el.image} alt={el.title}/>
                                                <h6 className="writter">{el.writter}</h6>
                                                <h4 className="title-blog">{el.title}</h4>
                                                <p className="deskripsi-blog">{el.description}</p>
                                            </div>
                                        )
                                    }
                                })
                        }
                    </div>
                </section>
            </main>
            <footer>
            <p>Peserta Program Beasiswa Protonema 2022/2023 |</p> <p>&nbsp;Andi Ahmad Yusup</p>
            </footer>
        </>
    );
}
export default Home;