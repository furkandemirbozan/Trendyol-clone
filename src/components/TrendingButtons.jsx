import React from 'react';
import { Button, Box, Typography, Divider } from '@mui/material';
import '../css/TrendingButtons.css';  // CSS dosyasını import ediyoruz

const buttonLabels = [
    'iPhone 15', 'Flo', 'Watsons', 'GS Store', 'Airfryer', 'Dyson Süpürge', 'Stanley Termos', 'Koltuk Takımı',
    'Kurutma Makinesi', 'Playstation 5', 'Kuzine Soba', 'Aura Cleanmax', 'Arçelik Bulaşık Makinesi',
    'Pandora', 'Zara', 'Sweatshirt', 'Philips Airfryer', 'Decathlon', 'IKEA', 'Siemens Bulaşık Makinesi',
    'Gant', 'Under Armour', 'Bambi Yatak', 'Baget Yüzük', 'Adidas Samba', 'Atasay', 'Bargello', 'Cep Telefonu',
    'UGG', 'Nike Air Force'
];

const popularBrands = [
    'Penti', 'Watsons', 'Stradivarius', 'Columbia', 'Puma', 'Apple', 'Xiaomi', 'Birkenstock', 'Adidas', 'Lacoste',
    'Madame Coco', 'Defacto', 'Tchibo', 'Network', 'Kiğılı', 'Mango', 'English Home', 'The North Face', 'Samsung',
    'Mudo', 'New Balance', 'Oppo', 'Arçelik', 'Nike', 'Avva', 'Pull & Bear', 'Mavi', 'Farmasi', 'Bosch', 'Migros'
];

const popularPages = [
    'Bluetooth Kulaklık', 'Azerbaycan\'dan Alışveriş', 'Laptop', 'iPhone 15 Plus', 'Apple Watch', 'Buzdolabı',
    'E-İhracat', 'Termos', 'Sınav Hazırlık ve Test Kitapları', 'Kitap', 'Elbise', 'Dyson Airwrap', 'Trendyol Blog',
    'iPhone', 'Nike Air Max', 'iPhone 15', 'iPhone 15 Pro', 'Çamaşır Makinesi', 'Öğrencilere Vergisiz Alışveriş',
    'Sırt Çantası', 'Kadın Mont', 'Televizyon', 'Sneaker', 'Popüler Aramalar', 'Apple Airpods', 'Markalar', 'Macbook',
    'Robot Süpürge', 'Bulaşık Makinesi', 'Kahve Makinesi', 'Oyuncu Koltuğu', 'Popüler Kategoriler', 'Roman, Hikaye ve Eğitim Kitapları'
];

const TrendingButtons = () => {
    return (
        <Box className="trending-buttons-container">
            <Typography variant="h6" component="div" className="trending-buttons-title mb-16">
                Bunlar da İlginizi Çekebilir
            </Typography>
            <Box className="trending-buttons">
                {buttonLabels.map((label, index) => (
                    <Button key={index} variant="outlined" className="trending-button">
                        {label}
                    </Button>
                ))}
            </Box>
            <Divider className="trending-buttons-divider" />
            <Typography variant="h5" component="div" className="trending-section-title">
                Tüm İhtiyaçlarınız İçin Tek İhtiyacınız Trendyol!
            </Typography>
            <Typography variant="body1" component="div" className="trending-section-text">
                Tüm İhtiyaçlarınız İçin Tek İhtiyacınız Trendyol!
                Tüm İhtiyaçlarınız İçin Tek İhtiyacınız Trendyol!
                Türkiye’nin önemli online alışveriş adreslerinden biri olan Trendyol, 2010 yılında modayı herkes için ulaşılabilir kılmak amacıyla kuruldu. Giyimden aksesuara, ayakkabıdan kozmetiğe kadar pek çok ürünle beğeni kazanır. Firma, gelişen pazar hacminde büyük söz sahibi olur. Hem farklı zevklere hem de bütçelere hitap eder. Kolay ve güvenli bir deneyim sunar. Üst ve alt giyim kategorilerinde çeşitli modeller hazırlanır. Bu koleksiyonlar uygun fiyat avantajıyla sunulur. Her mevsime uygun ürün seçenekleri bulunur. Kışlık seçimlerde kazak, mont, hırka, ceket gibi ürünleri baskındır. Yaz kombinlerinde renkli ve sade tişört modelleri sıklıkla kullanılır. İnce kumaştan üretilen jeanlar ve kapriler de yine yaz ayları için ideal bir seçimler olarak değerlendirilir. Yaz tatili için de bikini takımlarından satın alabiliriz. Geniş beden aralığı sayesinde istediğimiz ürünü tercih edebiliriz.

                Modern Tasarımlarıyla Dikkat Çeken Trendyol Markaları
                Kıyafet kombinleri seçilen ayakkabıyla tamamlanır. Günlük ayakkabı, spor ayakkabı, topuklu ayakkabı, sandalet, bot ve çizme olmak üzere geniş bir ürün skalası hazırlanır. Kıyafet tasarımları ise hedef kitlenin beklentilerine göre şekillendirilir. Elbiseden gömleğe, tunikten eşofman takımına kadar pek çok kategoride üretim yapılır. Sade, modern, kaliteli ve şık tasarımlar ilgiyle takip edilir. Sezonun trend renkleri ve modelleri hazırlanan kreasyonlarda hissedilir. Üretici markalar çocuklar için farklı tasarımlara imza atarlar. Birbirinden rahat, renkli ve eğlenceli modeller hazırlanır. Kız ve erkek çocukları için farklı kategoriler bulunur. Mevcut çeşitlilik beklentilerin karşılanması noktasında önemlidir. Giyim markaları arasından kendiniz veya çocuğunuz için ideal ürünleri seçebilirsiniz.

                Trendyol Müşterilerine Özel Ayrıcalıklı Uygulamalar
                Kuruluşundan beri müşterilere pek çok kategoride uygun fiyat seçeneği sağlayan Trendyol, ödeme aşamasında da getirdiği yeniliklerle müşterilerin beğenisini kazanır. Son yıllarda piyasaya çıkardığı Trendyol cüzdan uygulamasıyla da müşterilerine hızlı ve güvenli alışveriş imkanı sağlar. Bu uygulamaya para yükleyerek alışverişlerinizde kullanabilirsiniz. Ayrıca Trendyol tarafından verilen bonuslara da bu uygulama sayesinde sahip olabilirsiniz. Trendyol cüzdan kurumsal hediye çeki ile farklı kategorilerde yer alan avantajlarından yararlanabilirsiniz. Markalar, çalışanları ve müşterileri için özel günler için ödüllendirme amacıyla tercih edebilir. Hediye çeki cüzdana aktarıldıktan sonra farklı günlerde yapılan alışverişler için kullanılabilir. Trendyol fırsatları için yapılan kampanyalarda rahatlıkla kullanılması mümkündür. Alışverişiniz sonrası ürünün elinize ulaşmasını günlerce beklemek istemiyorsanız alışverişiniz sırasında Trendyol teslimat noktası seçeneğini kullanabilirsiniz.

                Trendyol Özel Gün İndirimleriyle Kaçırılmayacak Fırsatlar
                Toplumdaki sosyal bilincin oluşmasına katkı sağlayan Trendyol, Sepette İyilik uygulamasıyla farklı kategorilerde faaliyet gösteren sivil toplum kuruluşlarına ait ürünlerin satışını yapar. Böylece yardım zinciri oluşturulur. Yapılan tüm alışverişlerde avantaj elde etmek için ise devreye Trendyol Elite fırsatı girer. Özel hizmet ve ayrıcalıklar ilgi çekici bulunur. Bu ayrıcalıkları kullanarak mutfak alışverişinizi Trendyol Hızlı Market ile yapabilirsiniz. Temel gıdadan atıştırmalıklara, sebzeden meyveye pek çok kategoride istediğiniz ürünleri hızlı market ile bulabilirsiniz. Evden çıkmadan yapacağınız mutfak alışverişi yanında Trendyol Yemek ile de akşam yemeklerinizi pratik şekilde halledebilirsiniz. Yoğun iş temposunda yapamadığınız akşam yemeklerini bu uygulama sayesinde dert etmenize gerek kalmaz. Trendyol tarafından düzenlenen indirimler sayesinde alışveriş fırsatlarını değerlendirmek mümkündür.

                Modaya Uygun Trend Parçalar
                Ev yaşam ürünlerinde, giyimde, kozmetikte, elektronikte, oyuncu ekipmanlarında, pratik mutfak eşyalarında, bebek & çocuk ürünlerinde ve süpermarket kategorilerinde yapacağınız alışverişlerde uygun fiyat avantajından yararlanabilirsiniz. Belirli zamanlarda yapılan kampanyalar sayesinde sezonun moda kıyafetlerine ulaşabilir ve evinizin ihtiyaçlarını tamamlayabilirsiniz. Yaz tatilinin bitmesiyle başlayan okul telaşı Trendyol ile sorun olmaktan çıkar. Okul öncesi, ilkokul, ortaokul, lise, üniversite olarak kategorilere ayrılan kırtasiye ürünleri ihtiyaçların karşılanması için listelenir. Aynı zamanda mevsim geçişlerinde yapılan alışverişler için de çeşitli fırsatlar oluşturulur. Mevcut fırsatlar sayesinde hazırlık yapabilir, eksiklerinizi tamamlayabilirsiniz. Yapılan indirimlerde yer alan ürün çeşitliliği oldukça fazladır. Gram altın seçeneklerine dahi ulaşmak mümkündür. Hediye veya yatırım amaçlı üretilen çeşitler mevcuttur. Çeyrek altın sık tercih edilen ürünlerin başında gelir.

                Elektronik Eşyalarda Uygun Fiyatlar
                Ayakkabı & Çanta ürünleri ile günlük kombinlere şıklık katmak mümkündür. Sneaker, casual, topuklu ayakkabı, bot, çizme, kol ve sırt çantası modelleri başta olmak üzere geniş bir tasarım yelpazesi oluşturulur. Spor & Outdoor kategorisinde yer alan parçalar da aynı şekilde sahip oldukları çeşitlilikle dikkat çekerler. Giyim eşyaları ve ekipmanlar farklı başlıklar altında gruplandırılır. Yapılan gruplandırmada hedef kitlenin özellikleri belirleyici kriter olarak kabul edilir. İlgili kategoride farklı markaların ürünlerinin olması öncelikle seçim kolaylığı sağlar. Sonraki aşamada ise farklı bütçelere hitap edilmesini destekler. Karar aşamasında kişinin üründen ne beklediğini belirlemesi gerekir. Ayrıca kaliteli markaların tercih edilmesi, kullanım konforu açısından önemlidir. Üretim aşamasında seçilen malzemelerin, tasarım çizgilerinin ve işçiliğin göz önüne alınması tavsiye edilir. Nitelikli ürün seçimi sayesinde kullanım konforu yükselir. Hem kendiniz hem de sevdikleriniz için tercihinizi rahat, şık ve kaliteli modellerden yana kullanabilirsiniz.

                Tüm İhtiyaçların Trendyol’da!
                Ev & Mobilya kategorisinde yer alan ev tekstili, sofra & mutfak, aydınlatma, banyo, ev dekorasyon, mobilya, ev gereçleri, hobi, kırtasiye & ofis, yapı & market, oto & motosiklet ürünlerini indirim günlerinde yapılan kampanyalarla uygun fiyata satın alabilirsiniz. Bu kategori, yeni evlenecek çiftler ve evini yenilemek isteyenler için farklı markaları ve ürün çeşitlerini bir arada sunar. Bu sayede ihtiyaçlar kolay bir şekilde tamamlanır. Elektronik kategori içerisinde ise beyaz eşya, küçük ev aletleri, Tv & görüntü, ses, giyilebilir teknoloji, tablet & bilgisayar, elektronik aksesuarlar, kişisel bakım aletleri, oyunculara özel ürünler yer alır. İlgili başlık altında satılan akıllı cep telefonları da geniş model yelpazeleri ile ön plana çıkar. iPhone 11 sıklıkla tercih edilen cihazların başında gelir. iPhone 11 Pro Max modeli de tasarımı ve performansıyla etki alanını genişletir. Dikkat çeken bir diğeri ise iPhone 12 Pro Max modelidir ve teknik özellikleri sayesinde adından sıkça söz ettirir. Model çeşitliliği fiyat noktasında da kendini gösterir. İndirim günlerini takip ederek yapılan ayrıcalıklardan yararlanabilirsiniz. Kişisel bakımınızı da kozmetik kategorisinde yer alan makyaj, cilt bakımı, parfüm & deodorant, saç bakımı, epilasyon & tıraş ve genel bakım ürünleri sayesinde yerine getirebilirsiniz. Marka çeşitliliği bu kategori için de geçerlidir. Teknolojik ürünlerin haricinde hazırlanan Saat & Aksesuar grubu da ilgiyle takip edilir. Kadın, erkek ve çocuklar için üretilen birçok tasarım mevcuttur.

                En Yeni Ürünlerle İlginizi Çekebilecek Kategoriler
                22 Ayar Bilezik | Akıllı Saat | Bluetooth Kulaklık | Telefon | Elektrikli Scooter | Laptop | Robot Süpürge | Bisiklet | Çamaşır Makinesi | Iphone Xr | Abiye Elbise | Tablet | Erkek Mont | Xiaomi Redmi Note 8 | Spor Ayakkabı | Çalışma Masası | Buzdolabı | Kulaklık | Protein Tozu | Blazer Ceket
            </Typography>
            <Divider className="trending-buttons-divider" />
            <Box className="popular-links">
                <Box className="popular-links-column">
                    <Typography variant="h6" component="div" className="popular-links-title">
                        Popüler Marka ve Mağazalar
                    </Typography>
                    <Box className="popular-links-list">
                        {popularBrands.map((brand, index) => (
                            <Typography key={index} className="popular-link">{brand}</Typography>
                        ))}
                    </Box>
                </Box>
                <Box className="popular-links-column">
                    <Typography variant="h6" component="div" className="popular-links-title">
                        Popüler Sayfalar
                    </Typography>
                    <Box className="popular-links-list">
                        {popularPages.map((page, index) => (
                            <Typography key={index} className="popular-link">{page}</Typography>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TrendingButtons;
