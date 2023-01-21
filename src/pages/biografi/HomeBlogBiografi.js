/* eslint-disable jsx-a11y/alt-text */
import DetailBlogBiografi from '../../DetailBlogBiografi.json';
function HomeBlogBiografi() {
    return (
        <div>
            <nav>
                <div>
                    <a href="/"> <img src="../assets/image/1-des-2022/back.png" className="back" /></a>
                    <img src="../assets/image/1-des-2022/logo.png" className="logo" />
                </div>
            </nav>
            <section className="desk-blog wrapper">
            <h6 className="writter desk-writter">Andi Ahmad Yusup - 8 Des 2022</h6>
                <h2>17 Tokoh Inspiratif Dunia</h2>
            <img src="../assets/image/8-des-2022/thumbnail.jpg" />
                <p>
                    Memang, setiap orang di dunia pasti akan mengalami kegagalan di beberapa titik. Namun kegagalan bukanlah akhir dari segalanya. Perlu kita ketahui kegagalan merupakan awal dari kesuksesan. Banyak pelajaran yang dapat kita ambil dari kegagalan atau kesalahan tersebut.
                    <br className="distance-paragraph"/>
                    Dari kegagalan ini, kemampuan kita dalam menghadapi masalah akan meningkat. Solusi demi solusi akan semakin kita lihat dari seiring kita bertemu dengan kegagalan.
                    <br className="distance-paragraph"/>
                    Dalam hidup, kita harus memiliki motivasi untuk meningkatkan semangat untuk mencapai sebuah tujuan. Motif ini bisa datang dari dalam atau luar diri kita sendiri, yaitu dari orang terdekat atau orang – orang yang sudah sukses.
                    <br className="distance-paragraph"/>
                    Kegagalan adalah kesuksesan yang tertunda, ini adalah pepatah lama yang sering digunakan orang untuk melindungi diri sendiri ketika gagal. Sebenarnya, ungkapan ini seperti hanya alasan. Namun, pada kenyataannya banyak sekali karakter yang sering gagal namun menjadi hit besar dalam proses perjalanannya. Tentuk tidak ada orang yang mau gagal, tapi tidak bisa dipungkiri bahwa kita bisa bergabung bersama dalam lingkaran yang sama dengan tokoh tokoh inspiratif tersebut. Jadi, tidak ada salahnya belajar dari mereka.
                    <br className="distance-paragraph"/>
                    Tokoh – tokoh tersebut tentunya memiliki pengalaman hidup masing masing yang mereka perjuangkan untuk sukses di bidangnya masing – masing, proses demi proses mereka lewati untuk sampai di titik sekarang. Oleh karena itu, kita bisa belajar dari kegagalan, perjuangan, dan strategi – strategi yang mereka ambil dalam menghadapi rintangan hidupnya. Berikut ini tujuh belas tokoh terkenal dunia yang bisa memberi kita semangat untuk menggapai tujuan kita :
                    <br className="distance-paragraph"/>
                </p>
                <div className='biografi-wrapper'>
                    <ol>
                        {DetailBlogBiografi.map((e) => {
                            return <li key={e.key}><a href={`biografi/${e.key}`}>{e.title}</a></li>
                        })}
                    </ol>
                </div>
            </section>
            <footer>
                <p>Peserta Program Beasiswa Protonema 2022/2023 |</p> <p>&nbsp;Andi Ahmad Yusup</p>
            </footer>
        </div>
    )
}
export default HomeBlogBiografi;