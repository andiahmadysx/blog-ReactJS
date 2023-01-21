/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailBlog from '../DetailBlog.json';
function BlogDetail() {
    let { key } = useParams();
    useEffect(() => {

    }, [key])
    return (
        <div>
            <nav>
                <div>
                <a href="/"> <img src="../../assets/image/1-des-2022/logo.png" className='logo' /></a>
                </div>
            </nav>

            {DetailBlog.map((e) => {
                const string = e.detail.replace(/(?:\r\n|\r|\n)/g, "<br class='distance-paragraph'/>");
               
                console.log(key)
                if (e.key === key) {
                    if (e.type === "image") {
                        return (
                            <section key={e.key} className="desk-blog wrapper">
                                <h6 className="writter desk-writter">{e.writter}</h6>
                                <h2>{e.title}</h2>
                                <img src={e.image} />
                                <p className='detail-biografi' dangerouslySetInnerHTML={{ __html: string }} />
                            </section>
                        )
                    } else {
                        return (
                            <section key={e.key} className="desk-blog wrapper">
                                <h6 className="writter desk-writter">{e.writter}</h6>
                                <h2>{e.title}</h2>
                                <iframe className="vid-embed" src={e.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <p className='detail-biografi' dangerouslySetInnerHTML={{ __html: string }} />
                            </section>
                        )
                    }
                }
            })}
            <footer>
                <p>Peserta Program Beasiswa Protonema 2022/2023 |</p> <p>&nbsp;Andi Ahmad Yusup</p>
            </footer>
        </div>
    )
}
export default BlogDetail;