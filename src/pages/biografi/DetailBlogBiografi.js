/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailBlogBiografi from '../../DetailBlogBiografi.json';
function DetailBiografi() {
    let { key } = useParams();
    useEffect(()=>{

    }, [key])
    return (
        <div>
             <nav>
                <div>
                    <a href="/blog/biografi"> <img src="../../assets/image/1-des-2022/back.png" className="back" /></a>
                    <img src="../../assets/image/1-des-2022/logo.png" className="logo" />
                </div>
            </nav> 

            {DetailBlogBiografi.map((e) => {
                const string = e.detail.replace(/(?:\r\n|\r|\n)/g, "<br class='distance-paragraph'/>");
                console.log(e.key)
                console.log(key)
                if (e.key === key) {
                    return (
                        <section key={e.key} className="desk-blog wrapper">
                        <h6 className="writter desk-writter">Andi Ahmad Yusup - 8 Des 2022</h6>
                            <h2>{e.title}</h2>
                            <img src={e.image}/>
                            <p className='detail-biografi' dangerouslySetInnerHTML={{ __html: string }} />
                        </section>
                    ) 
                }
            })}
            <footer>
                <p>Peserta Program Beasiswa Protonema 2022/2023 |</p> <p>&nbsp;Andi Ahmad Yusup</p>
            </footer>
        </div>
    )
}
export default DetailBiografi;