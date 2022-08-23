## 002_Veritabanlarına Giriş


## Biyolojik Veri Tabanları
Uygulamalı biyoinformatiğin temeli, dizileme sonucu elde edilen biyolojik verilerin saklanmasıdır. Uzun laboratuvar süreçleri sonucunda elde edilen büyük ölçekli dizileme verisinin uygun koşullarda saklanması ve herkesin ulaşabileceği mümkünse web tabanlı veritabanları olması gerekmektedir. Veritabanları, veri niteliğine ve kullanım amaçlarına göre 4’e ayrılmaktadır.

* Primer
* Sekonder
* Fenotip
* Moleküler Yapı

### 1- Primer Veritabanları
Primer veritabanları, primer dizileme verilerini (nükleotid veya protein) anotasyon bilgilerini, bibliyografik verileri ve diğer referans veri tabanları ile bağlantıları içermektedir. Primer veritabanları nükleotid ve protein dizilerini içermek üzere ikiye ayrılmaktadır. 

### 2- Sekonder Veritabanları
Sekonder veritabanları, primer protein dizisi verilerinin analizi için kullanılmaktadır. Protein dizilerindeki korunmuş bölgelerin ve kısa protein dizilerinin proteinlerin fonkisyonları açısından önemli bir görevi bulunamktadır. Bu kapsamda motiflerin ve protein ailelerinin ve fonksiyonlarının belirlenmesi amacıyla sekonder veri tabanları kullanılabilmektedir. Bu veritabanları; Prosite (Hulo ve ark., 2006), PRINTS (Attwood ve ark., 1994), Pfam (El-Gebali ve ark., 2019), Interpro (Blum ve ark., 2020)’dur.

Links

### 3- Fenotip ve Genotip Veritabanları

Hedeflendirilmiş akılcı ilaç tasarımları için hastalıkları oluşturan genler ve bu genlerin hastalıkla ilişkilendirilmesi, bunun yanında genlerin üretiminden sorumlu olduğu proteinlerin de belirlenmesi gerekmektedir. Bu ilişkinin tanımlanması, organizmalar ile biyolojik özelliklerin kayıt altına alınması adına Fenotip ve Genotip veritabanları kullanılmaktadır. Bu amaçla kullanılan veritabanı PhenomicDB’dir.

Links

### 4- Moleküler Yapı Veritabanları

Moleküler yapı veritabanları, makromoleküllerin, 3 boyutlu modellerinin, kristal yapılarının ve yoğunluklu olarak da proteinlerin saklandığı veritabanlarıdır. Proteinlerin biyolojik fonksiyonlarının belirli yapısal organizasyonlardan ileri gelmesi, bilinmeyen ve yeni oluşturulan/geliştirilen protein yapıları ile ilgili varsayımlarda bulunabilmeyi sağlamaktadır. Bu kapsamda en çok kullanılan veritabanları; Protein Data Bank, SCOP, CATH, PubChem’dir.

Links


## Dizi Karşılaştırma ve Dizi Arama Veritabanları

Genomik, proteomik ve sekretoma kadar birden fazla veri tipinin birbirleriyle ilişkisinin incelenmesi tamamiyle omik bilimi olarak adlandırılmaktadır. Örneğin “transkriptom” terimi bir organizmada bulunan bütün RNA transkriptlerini ifade etmektedir. Son yıllarda bu verilerin içerisine epigenetik modifikasyon verisi de eklenmiş ve birçok farklı veri tipi oluşmuştur. Bu verilerin 0 ve 1’lerin olduğu bilgisayar ortamında ifade edilmesi için farklı dosya formatları ve isimleri kullanılmaktadır. Günümüzde en çok kullanılan veri formatı FASTA formatıdır. Her ne kadar farklı veritabanları kendi dosya formatlarını kullansalar da Bilgi Değişimi için Amerikan Standart Kodu (ASCII)’ye dayalı FASTA formatı geniş kullanım alanı bulmaktadır.

Dizi karşılaştırması yapabilmek için elimizde bulunan herhangi bir sekanslama verisinin FASTA (“fast all”) formatında olması gerekmektedir. FASTA formatı, “>” işareti ile başlar ve sonrasında sekans verisine ait belirleyici bazı bilgileri içermektedir. FASTA formatına örnek Şekil 6’da verilmiştir. FASTA formatının kullanılmadığı durumlarda ya da formatlar arası değişim yapma gereği olduğunda “Readseq” çevrimiçi aracı kullanılabilmektedir. Readseq,  GenBank, EMBL, FASTA, CLUSTAL, PHYLIP (Filogenetik Çıkarım Paketi)’ın da dâhil olduğu 19 formatı desteklemektedir. 


### Pairwise (ikili) ve Multiple Dizi Karşılaştırma

Proteinlerin ve nükleotid dizilerinin karşılaştırılması biyoinformatikte en çok başvurulan yöntemlerden biridir. Nükleotid ve protein yapılarının analizi ve 3 boyutlu yapıların keşfedilmesi, bulunan genlerin ekspresyon analizlerinin yapılması için birbirlerine benzer olan dizilerin birbirleri ile karşılaştırılması gerekmektedir. Karşılaştırmadaki farkların analiz edilmesi bu profillerin sağlıklı bir şekilde modellenmesine olanak sağlamaktadır. Örneğin bir nükleotid ya da protein dizisindeki bir değişim farklı bir protein sentezine sebep olabilmektedir. Bu kapsamda da birden fazla genomun aynı anda karşılaştırılması ve aralarındaki farkların ortaya konması büyük önem arz etmektedir.

Nükleotid dizilerini birbiri ile karşılaştırmadan önce bazı terimlerin tanımlanması gerekmektedir. Bunlardan ilki “homolog”dir. Homoloji benzerlik ölçütünden ziyade tarihsel ve evrimsel süreçteki benzerliği ifade etmektedir. Bir proteinin farklı organizmalardaki karşılıkları “Ortholog”, aynı organizmadaki farklı görevler barındıran protein yapılarına da “paralog” adı verilmektedir. 

Dizi hizalama algoritmaları basit anlamıyla satırlarda organizmaları, sütunlarda karakter benzerliklerini temel almaktadır. Karşılığı bulunmayan nükleotidleri ve aminoasitleri temsil etmek için “-“ işareti kullanılmaktadır. Basit ya da birden fazla olabilen hizalama algoritmaları bir skorlama sistemi geliştirilmiştir. Bu skorlama sistemlerinden en çok kullanılanlardan bir tanesi PAM (Nokta Mutasyonu Hedefli) diğeri de BLOSUM (Blok Değişim Matrisi)’dur. Skorlama sistemlerindeki puanın yüksek olması en olası hizalamayı temsil etmektedir. Hizalamanın “Local” olması küçük bölgelerde bulunan benzerliklere odaklı Needleman-Wunsch algoritmasını, “Global” olması da tüm genom ya da protein dizileri dikkate alınarak yapılan Smith-Waterman hizalama algoritmasını tanımlama amacıyla kullanılır. 

