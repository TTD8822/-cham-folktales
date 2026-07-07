/* =========================================================
   DỮ LIỆU KHÔNG GIAN VĂN HÓA CHĂM
   ---------------------------------------------------------
   Mỗi mục gồm:
   - category : tên nhóm (hiện ở tag đầu trang chi tiết)
   - title    : tiêu đề
   - icon     : emoji đại diện (dùng khi chưa có ảnh)
   - image    : tên file ảnh (đặt ảnh cùng thư mục với chi-tiet.html
                rồi đổi tên đúng như bên dưới là ảnh sẽ tự hiện lên)
   - video    : link YouTube dạng EMBED, ví dụ:
                "https://www.youtube.com/embed/XXXXXXXXXXX"
                Để trống (null) nếu chưa có video — trang chi tiết
                sẽ tự ẩn phần video đi, không bị lỗi.
   - desc     : mảng các đoạn văn mô tả
   - facts    : mảng thông tin nhanh { icon, label, value }

   ⚠️ CÁC MỤC CHƯA CÓ ẢNH/VIDEO THẬT đã được ghi chú "// TODO"
   ngay phía trên — bạn chỉ cần thay tên file ảnh / link video
   vào đúng chỗ, không cần sửa gì thêm ở các file HTML khác.
   ========================================================= */

window.VANHOA_DATA = {

  /* =====================================================
     1. DI TÍCH VÀ KIẾN TRÚC CHĂM
     ===================================================== */

  "po-klong-garai": {
    category: "Di tích và kiến trúc Chăm",
    icon: "🏛️",
    title: "Tháp Po Klong Garai",
    image: "thap-po-klong-garai.jpg", // đã có sẵn trong web
    video: "https://www.youtube.com/embed/6Ec2rRLCC3w",
    desc: [
      "Tháp Po Klong Garai là quần thể tháp Chăm cổ nổi tiếng nhất Việt Nam, tọa lạc trên ngọn đồi Trầu ở thành phố Phan Rang–Tháp Chàm, tỉnh Ninh Thuận. Được xây dựng vào cuối thế kỷ XIII – đầu thế kỷ XIV, quần thể gồm ba tháp: Tháp Chính, Tháp Lửa và Tháp Cổng.",
      "Điều kỳ diệu nhất của kiến trúc Chăm là các khối gạch được xây hoàn toàn không dùng vữa nhưng vẫn kết dính chặt chẽ và đứng vững qua hơn 700 năm. Bí quyết kỹ thuật này đến nay vẫn chưa được giải đáp hoàn toàn.",
      "Tháp được đặt theo tên vua Po Klong Garai – vị vua huyền thoại của người Chăm, người đã có công xây dựng hệ thống thủy lợi và đoàn kết dân tộc Chăm Pa."
    ],
    facts: [
      { icon: "📅", label: "Năm xây dựng", value: "Cuối TK XIII – đầu TK XIV" },
      { icon: "📍", label: "Vị trí", value: "Phan Rang–Tháp Chàm, Ninh Thuận" },
      { icon: "🧱", label: "Đặc điểm", value: "Xây bằng gạch nung, không dùng vữa" },
      { icon: "🏯", label: "Cấu trúc", value: "3 tháp: Tháp Chính, Tháp Lửa, Tháp Cổng" },
      { icon: "🌍", label: "Di sản", value: "Di tích quốc gia đặc biệt của Việt Nam" }
    ]
  },

  "po-rome": {
    category: "Di tích và kiến trúc Chăm",
    icon: "🏛️",
    title: "Tháp Po Rome",
    image: "thap-po-rome.jpg", // TODO: thêm ảnh thật, đặt tên đúng "thap-po-rome.jpg"
    video: "https://www.youtube.com/embed/LX7m-UqQs4A",
    desc: [
      "Tháp Po Rome là đền tháp Chăm nằm tại vùng Hậu Sanh, được xây để thờ vua Po Rome – vị vua được người Chăm tôn kính và thần hóa. Đây là một trong những tháp Chăm xây dựng muộn nhất còn tồn tại và vẫn giữ vai trò quan trọng trong đời sống tín ngưỡng của cộng đồng Chăm Bàlamôn.",
      "Công trình được xây dựng vào khoảng cuối thế kỷ XVI đến đầu thế kỷ XVII, sau khi vua Po Rome qua đời. Khác với nhiều tháp Chăm cổ vốn thờ các vị thần Hindu, tháp này thờ một vị vua lịch sử đã được thần hóa, phản ánh sự kết hợp giữa tín ngưỡng bản địa và truyền thống tôn giáo Chăm. Đây cũng được xem là công trình tháp gạch lớn cuối cùng của vương quốc Chămpa.",
      "Kiến trúc mang phong cách Chăm muộn với thân tháp bằng gạch nung, cửa chính quay về hướng Đông và ít hoa văn hơn các tháp Chăm cổ như Po Klong Garai hay Hòa Lai. Trong khuôn viên có tháp chính, tháp phụ và một miếu nhỏ; bên trong tháp chính đặt tượng vua Po Rome cùng các tượng liên quan đến hoàng hậu, phục vụ hoạt động thờ cúng truyền thống.",
      "Tháp Po Rome vẫn là nơi diễn ra các nghi lễ quan trọng của người Chăm theo đạo Bàlamôn, đặc biệt là lễ hội Katê hằng năm. Ngoài giá trị kiến trúc, di tích còn lưu giữ nhiều truyền thuyết và ký ức lịch sử về giai đoạn cuối của vương quốc Chămpa, góp phần bảo tồn bản sắc văn hóa Chăm ở miền Trung Việt Nam."
    ],
    facts: [
      { icon: "📅", label: "Năm xây dựng", value: "Cuối TK XVI – đầu TK XVII" },
      { icon: "📍", label: "Vị trí", value: "Vùng Hậu Sanh, Ninh Thuận" },
      { icon: "👑", label: "Thờ phụng", value: "Vua Po Rome đã được thần hóa" },
      { icon: "🏯", label: "Cấu trúc", value: "Tháp chính, tháp phụ và một miếu nhỏ" },
      { icon: "🎉", label: "Lễ hội", value: "Trung tâm lễ hội Katê hằng năm" }
    ]
  },

  "hoa-lai": {
    category: "Di tích và kiến trúc Chăm",
    icon: "🏛️",
    title: "Tháp Hòa Lai",
    image: "thap-hoa-lai.jpg", // TODO: thêm ảnh thật, đặt tên đúng "thap-hoa-lai.jpg"
    video: "https://www.youtube.com/embed/dHgDXc8PbgQ",
    desc: [
      "Tháp Hòa Lai (còn gọi là tháp Ba Tháp) tọa lạc tại huyện Thuận Bắc, tỉnh Ninh Thuận, được xây dựng vào khoảng đầu thế kỷ IX. Đây là một trong những cụm tháp Chăm cổ nhất còn lại, tiêu biểu cho phong cách kiến trúc Hòa Lai — một trong những phong cách nghệ thuật Chăm sớm và đẹp nhất.",
      "Ban đầu quần thể gồm ba tháp xếp thẳng hàng, nhưng hiện chỉ còn tháp Bắc và tháp Nam tương đối nguyên vẹn, tháp giữa đã bị sụp đổ theo thời gian. Các tháp còn lại vẫn giữ được những mảng hoa văn chạm khắc tinh xảo mang đậm dấu ấn nghệ thuật Chăm cổ.",
      "Hòa Lai được giới nghiên cứu đánh giá cao vì phong cách kiến trúc trang trí cầu kỳ, vòm cửa giả và các trụ ốp mang tính thẩm mỹ độc đáo, là nguồn tư liệu quý để tìm hiểu giai đoạn phát triển sớm của nghệ thuật kiến trúc Chămpa."
    ],
    facts: [
      { icon: "📅", label: "Năm xây dựng", value: "Đầu thế kỷ IX" },
      { icon: "📍", label: "Vị trí", value: "Thuận Bắc, Ninh Thuận" },
      { icon: "🎨", label: "Phong cách", value: "Phong cách nghệ thuật Hòa Lai" },
      { icon: "🏯", label: "Hiện trạng", value: "Còn lại tháp Bắc và tháp Nam" },
      { icon: "🌍", label: "Giá trị", value: "Di tích kiến trúc – nghệ thuật cấp quốc gia" }
    ]
  },

  "my-son": {
    category: "Di tích và kiến trúc Chăm",
    icon: "🏛️",
    title: "Thánh địa Mỹ Sơn",
    image: "thanh-dia-my-son.jpg", // TODO: thêm ảnh thật, đặt tên đúng "thanh-dia-my-son.jpg"
    video: "https://www.youtube.com/embed/guWPa3Pu6lk",
    desc: [
      "Thánh địa Mỹ Sơn nằm tại xã Duy Phú, huyện Duy Xuyên, tỉnh Quảng Nam, là quần thể di tích đền tháp Chăm lớn nhất còn lại ở Việt Nam, được xây dựng liên tục từ thế kỷ IV đến thế kỷ XIII. Đây từng là trung tâm tôn giáo quan trọng nhất của vương quốc Chămpa, chủ yếu thờ thần Shiva.",
      "Quần thể gồm hơn 70 công trình đền tháp lớn nhỏ, được các triều vua Chămpa liên tục xây dựng, tu bổ và mở rộng suốt nhiều thế kỷ, thể hiện sự giao thoa và phát triển của nhiều phong cách kiến trúc – điêu khắc khác nhau qua từng thời kỳ.",
      "Năm 1999, Mỹ Sơn được UNESCO công nhận là Di sản Văn hóa Thế giới nhờ giá trị lịch sử, kiến trúc và nghệ thuật điêu khắc độc đáo, minh chứng cho một nền văn minh Chămpa rực rỡ từng tồn tại ở miền Trung Việt Nam."
    ],
    facts: [
      { icon: "📅", label: "Thời gian xây dựng", value: "Thế kỷ IV – XIII" },
      { icon: "📍", label: "Vị trí", value: "Duy Phú, Duy Xuyên, Quảng Nam" },
      { icon: "🛕", label: "Quy mô", value: "Hơn 70 công trình đền tháp" },
      { icon: "🙏", label: "Tín ngưỡng", value: "Trung tâm thờ thần Shiva" },
      { icon: "🌍", label: "Danh hiệu", value: "Di sản Văn hóa Thế giới UNESCO (1999)" }
    ]
  },

  /* =====================================================
     2. LỄ HỘI TRUYỀN THỐNG
     ===================================================== */

  "kate": {
    category: "Lễ hội truyền thống",
    icon: "🎉",
    title: "Lễ Hội Katê",
    image: "le-hoi-kate.jpg", // đã có sẵn trong web
    video: "https://www.youtube.com/embed/5PpEvxas5SQ",
    desc: [
      "Lễ hội Katê là lễ hội lớn nhất và đặc sắc nhất của người Chăm Bàlamôn, được tổ chức vào tháng 7 theo lịch Chăm (khoảng tháng 9–10 dương lịch) hằng năm.",
      "Đây là dịp để người Chăm tưởng nhớ các vị thần và tổ tiên, đặc biệt là vua Po Klong Garai và nữ thần Thiên Y A Na. Lễ hội diễn ra tại các tháp Chăm cổ kính với các nghi lễ tắm tượng thần, mặc y phục cho tượng và múa hát truyền thống.",
      "Katê không chỉ là nghi lễ tôn giáo mà còn là dịp để cộng đồng Chăm sum họp, gìn giữ bản sắc văn hóa và truyền lại cho thế hệ trẻ những giá trị tinh thần quý báu."
    ],
    facts: [
      { icon: "📅", label: "Thời gian", value: "Tháng 7 lịch Chăm (tháng 9–10 dương lịch)" },
      { icon: "📍", label: "Địa điểm", value: "Tháp Chăm tại Ninh Thuận, Bình Thuận" },
      { icon: "🙏", label: "Ý nghĩa", value: "Tưởng nhớ thần linh và tổ tiên người Chăm" },
      { icon: "🎭", label: "Hoạt động", value: "Múa Chăm, hát dân ca, nghi lễ tắm tượng thần" },
      { icon: "🏛️", label: "Di sản", value: "Di sản văn hóa phi vật thể quốc gia" }
    ]
  },

  "rija-nagar": {
    category: "Lễ hội truyền thống",
    icon: "🎉",
    title: "Lễ Rija Nagar",
    image: "le-rija-nagar.jpg", // TODO: thêm ảnh thật, đặt tên đúng "le-rija-nagar.jpg"
    video: "https://www.youtube.com/embed/gajDNM_yoNs",
    desc: [
      "Rija Nagar là lễ hội mở đầu cho một năm mới theo lịch Chăm, thường được tổ chức vào đầu tháng Giêng lịch Chăm (khoảng tháng 4 dương lịch), mang ý nghĩa cầu an, xua đuổi những điều không may của năm cũ và đón nhận những điều tốt lành cho năm mới.",
      "Lễ được tổ chức tại các làng Chăm với sự chủ trì của các chức sắc tôn giáo như thầy Kadhar, bà Bóng, thông qua các nghi thức cúng tế thần linh, tổ tiên và các vị thần bảo hộ xóm làng.",
      "Rija Nagar thể hiện rõ nét tín ngưỡng nông nghiệp và vòng đời của cộng đồng Chăm, là dịp gắn kết các thành viên trong làng và duy trì các nghi lễ dân gian truyền thống qua nhiều thế hệ."
    ],
    facts: [
      { icon: "📅", label: "Thời gian", value: "Đầu tháng Giêng lịch Chăm" },
      { icon: "🙏", label: "Ý nghĩa", value: "Cầu an, đón năm mới, xua điều không may" },
      { icon: "👳", label: "Chủ trì", value: "Thầy Kadhar, bà Bóng và các chức sắc" },
      { icon: "🏘️", label: "Quy mô", value: "Tổ chức theo từng làng Chăm" }
    ]
  },

  "ramuwan": {
    category: "Lễ hội truyền thống",
    icon: "🎉",
    title: "Tháng Chay Ramưwan",
    image: "le-ramuwan.jpg", // TODO: thêm ảnh thật, đặt tên đúng "le-ramuwan.jpg"
    video: "https://www.youtube.com/embed/v6gOeHTBDXM",
    desc: [
      "Ramưwan là tháng lễ quan trọng của cộng đồng người Chăm theo đạo Bàni (Hồi giáo bản địa), diễn ra hằng năm với các nghi lễ tưởng nhớ tổ tiên, ông bà đã khuất và thực hành chay tịnh trong khoảng một tháng.",
      "Trước khi vào tháng chay, các gia đình thực hiện lễ tảo mộ, cúng gia tiên tại nhà và tại các nghĩa trang, thể hiện đạo lý uống nước nhớ nguồn sâu sắc của người Chăm Bàni.",
      "Trong suốt tháng Ramưwan, các chức sắc tôn giáo thực hành chay tịnh nghiêm ngặt tại thánh đường (chùa Chăm Bàni), trong khi cộng đồng tổ chức nhiều hoạt động văn hóa, thắt chặt tình đoàn kết xóm làng."
    ],
    facts: [
      { icon: "📅", label: "Thời gian", value: "Khoảng 1 tháng theo lịch Chăm Bàni" },
      { icon: "🙏", label: "Cộng đồng", value: "Người Chăm theo đạo Bàni" },
      { icon: "🕌", label: "Địa điểm", value: "Thánh đường (chùa Chăm Bàni), nghĩa trang, gia đình" },
      { icon: "🎭", label: "Hoạt động", value: "Tảo mộ, cúng gia tiên, chay tịnh" }
    ]
  },

  /* =====================================================
     3. LÀNG NGHỀ TRUYỀN THỐNG
     ===================================================== */

  "bau-truc": {
    category: "Làng nghề truyền thống",
    icon: "🏺",
    title: "Làng Gốm Bàu Trúc",
    image: "lang-gom-bau-truc.jpg", // đã có sẵn trong web
    video: "https://www.youtube.com/embed/YeqLuq2zKGg",
    desc: [
      "Làng gốm Bàu Trúc thuộc thị trấn Phước Dân, huyện Ninh Phước, tỉnh Ninh Thuận – được công nhận là một trong những làng gốm cổ nhất Đông Nam Á còn hoạt động cho đến ngày nay.",
      "Điểm độc đáo nhất của gốm Bàu Trúc là hoàn toàn làm bằng tay, không dùng bàn xoay. Người thợ đi vòng quanh sản phẩm để tạo hình, dùng đất sét địa phương pha trộn với cát mịn lấy từ sông Quao. Sau khi phơi khô, gốm được nung ngoài trời bằng củi và rơm trong khoảng 5–7 giờ.",
      "Gốm Bàu Trúc mang màu sắc tự nhiên đặc trưng: đỏ gạch, đen bóng hoặc nâu vàng với hoa văn hình học mang đậm bản sắc Chăm. Nghề làm gốm chủ yếu do phụ nữ Chăm truyền dạy từ đời này sang đời khác."
    ],
    facts: [
      { icon: "📍", label: "Địa điểm", value: "Ninh Phước, Ninh Thuận" },
      { icon: "⏳", label: "Lịch sử", value: "Hàng nghìn năm tuổi, cổ nhất Đông Nam Á" },
      { icon: "🤲", label: "Kỹ thuật", value: "Hoàn toàn thủ công, không dùng bàn xoay" },
      { icon: "🔥", label: "Nung gốm", value: "Nung ngoài trời bằng củi và rơm" },
      { icon: "👩", label: "Người làm", value: "Chủ yếu do phụ nữ Chăm thực hiện" }
    ]
  },

  "my-nghiep": {
    category: "Làng nghề truyền thống",
    icon: "🧵",
    title: "Làng Dệt Mỹ Nghiệp",
    image: "lang-det-my-nghiep.jpg", // TODO: thêm ảnh thật, đặt tên đúng "lang-det-my-nghiep.jpg"
    video:  "https://www.youtube.com/embed/frPo76uJ3PY",
    desc: [
      "Làng dệt Mỹ Nghiệp thuộc thị trấn Phước Dân, huyện Ninh Phước, tỉnh Ninh Thuận, là một trong những làng nghề dệt thổ cẩm truyền thống lâu đời nhất của người Chăm, tồn tại và phát triển qua nhiều thế kỷ.",
      "Nghề dệt Mỹ Nghiệp sử dụng khung dệt gỗ thủ công, sợi bông và các loại chỉ màu tự nhiên, tạo ra những tấm thổ cẩm với hoa văn hình học tinh xảo mang đậm bản sắc Chăm, dùng trong trang phục lễ hội, trang phục cưới và các vật dụng nghi lễ.",
      "Ngày nay, làng dệt Mỹ Nghiệp vừa gìn giữ kỹ thuật dệt cổ truyền vừa phát triển các sản phẩm lưu niệm, thời trang để đáp ứng nhu cầu du lịch, góp phần bảo tồn và quảng bá văn hóa Chăm."
    ],
    facts: [
      { icon: "📍", label: "Địa điểm", value: "Phước Dân, Ninh Phước, Ninh Thuận" },
      { icon: "🧵", label: "Chất liệu", value: "Sợi bông, chỉ màu tự nhiên" },
      { icon: "🤲", label: "Kỹ thuật", value: "Dệt thủ công bằng khung gỗ truyền thống" },
      { icon: "👘", label: "Ứng dụng", value: "Trang phục lễ hội, trang phục cưới" }
    ]
  },

  /* =====================================================
     4. VĂN HÓA CHĂM
     ===================================================== */

  "trang-phuc": {
    category: "Văn hóa Chăm",
    icon: "👘",
    title: "Trang Phục Truyền Thống",
    image: "trang-phuc-cham.jpg", // TODO: thêm ảnh thật, đặt tên đúng "trang-phuc-cham.jpg"
    video: "https://www.youtube.com/embed/wre-xQSTmSg",
    desc: [
      "Trang phục truyền thống của người Chăm mang nét đặc trưng riêng biệt, thể hiện rõ sự phân biệt theo giới tính, độ tuổi và vai trò tôn giáo trong cộng đồng.",
      "Phụ nữ Chăm thường mặc áo dài truyền thống (aw kamei) kết hợp với váy quấn (khan) dệt hoa văn thổ cẩm sặc sỡ; nam giới mặc áo dài, quấn khăn (khan mbang) trên đầu. Trang phục của các chức sắc tôn giáo như thầy Cả sư, bà Bóng có màu sắc và hoa văn riêng, thể hiện địa vị trong nghi lễ.",
      "Chất liệu vải chủ yếu là thổ cẩm dệt tay từ làng Mỹ Nghiệp, với hoa văn hình học mang ý nghĩa tâm linh và thẩm mỹ, được sử dụng nhiều nhất trong các dịp lễ hội, cưới hỏi và nghi lễ tôn giáo."
    ],
    facts: [
      { icon: "👗", label: "Trang phục nữ", value: "Áo dài (aw kamei) và váy quấn thổ cẩm" },
      { icon: "👔", label: "Trang phục nam", value: "Áo dài kết hợp khăn quấn đầu" },
      { icon: "🧵", label: "Chất liệu", value: "Thổ cẩm dệt tay Mỹ Nghiệp" },
      { icon: "🎭", label: "Dịp sử dụng", value: "Lễ hội, cưới hỏi, nghi lễ tôn giáo" }
    ]
  },

  "am-thuc": {
    category: "Văn hóa Chăm",
    icon: "🍲",
    title: "Ẩm Thực Chăm",
    image: "am-thuc-cham.jpg", // TODO: thêm ảnh thật, đặt tên đúng "am-thuc-cham.jpg"
    video: "https://www.youtube.com/embed/mhbKz6-6Sgw",
    desc: [
      "Ẩm thực Chăm chịu ảnh hưởng từ điều kiện tự nhiên vùng duyên hải Nam Trung Bộ và tín ngưỡng tôn giáo, tạo nên những món ăn mang hương vị đặc trưng, thường dùng nhiều gia vị và hải sản.",
      "Một số món tiêu biểu gồm: canh chua cá lóc, gỏi cá, bánh gừng (trong lễ cưới), cơm nị – cà púa (chịu ảnh hưởng ẩm thực Chăm Hồi giáo), cùng các loại mắm và rau rừng đặc trưng của vùng Ninh Thuận, Bình Thuận.",
      "Ẩm thực trong các dịp lễ hội, cưới hỏi của người Chăm thường có quy định nghiêm ngặt về món ăn dâng cúng thần linh, tổ tiên, thể hiện sự gắn kết chặt chẽ giữa văn hóa ẩm thực và tín ngưỡng."
    ],
    facts: [
      { icon: "🐟", label: "Nguyên liệu", value: "Hải sản, cá đồng, rau rừng vùng duyên hải" },
      { icon: "🍰", label: "Món tiêu biểu", value: "Bánh gừng, cơm nị – cà púa, canh chua cá lóc" },
      { icon: "🙏", label: "Ý nghĩa", value: "Gắn liền với nghi lễ cúng tổ tiên, thần linh" }
    ]
  },

  "nha-o": {
    category: "Văn hóa Chăm",
    icon: "🏠",
    title: "Nhà Ở Truyền Thống",
    image: "nha-o-cham.jpg", // TODO: thêm ảnh thật, đặt tên đúng "nha-o-cham.jpg"
    video: "https://www.youtube.com/embed/Hnps8PhjWGI",
    desc: [
      "Nhà ở truyền thống của người Chăm thường được xây dựng theo quần thể gồm nhiều nếp nhà nhỏ trong cùng một khuôn viên, mỗi nếp nhà có chức năng riêng như nhà khách, nhà bếp, nhà tân hôn, nhà kho...",
      "Kiến trúc nhà Chăm truyền thống chủ yếu làm bằng gỗ, mái lợp tranh hoặc ngói, nền nhà thường cao hơn mặt đất để tránh ẩm thấp. Cách bố trí nhà cửa trong khuôn viên tuân theo những quy tắc về hướng và trật tự các thế hệ trong gia đình theo chế độ mẫu hệ.",
      "Ngày nay, nhiều gia đình Chăm đã chuyển sang xây nhà kiên cố hiện đại, nhưng một số làng vẫn còn giữ lại các quần thể nhà truyền thống, trở thành điểm tham quan tìm hiểu văn hóa Chăm."
    ],
    facts: [
      { icon: "🏘️", label: "Bố cục", value: "Quần thể nhiều nếp nhà trong một khuôn viên" },
      { icon: "🪵", label: "Vật liệu", value: "Gỗ, mái tranh hoặc ngói" },
      { icon: "👪", label: "Chế độ", value: "Theo chế độ mẫu hệ truyền thống" }
    ]
  },

  "tin-nguong": {
    category: "Văn hóa Chăm",
    icon: "🙏",
    title: "Tín Ngưỡng Chăm",
    image: "tin-nguong-cham.jpg", // TODO: thêm ảnh thật, đặt tên đúng "tin-nguong-cham.jpg"
    video: "https://www.youtube.com/embed/3T-ncsKq9v0",
    desc: [
      "Cộng đồng người Chăm hiện nay theo ba tín ngưỡng – tôn giáo chính: Chăm Bàlamôn (chịu ảnh hưởng Hindu giáo), Chăm Bàni (Hồi giáo bản địa hóa) và một bộ phận theo Hồi giáo Islam chính thống.",
      "Tín ngưỡng Chăm Bàlamôn thờ các vị thần Hindu như Shiva, cùng các vị vua được thần hóa như Po Klong Garai, Po Rome. Các nghi lễ được thực hiện bởi hệ thống chức sắc tôn giáo như thầy Cả sư, thầy Bà cả, bà Bóng, ông Kadhar...",
      "Bên cạnh tôn giáo chính thống, người Chăm còn duy trì tín ngưỡng dân gian thờ cúng tổ tiên, thần linh bảo hộ làng xóm, gắn liền với các lễ hội như Katê, Rija Nagar, thể hiện đời sống tâm linh phong phú và đặc sắc."
    ],
    facts: [
      { icon: "🕉️", label: "Tôn giáo chính", value: "Bàlamôn, Bàni, Hồi giáo Islam" },
      { icon: "🙏", label: "Đối tượng thờ", value: "Thần Hindu, vua được thần hóa, tổ tiên" },
      { icon: "👳", label: "Chức sắc", value: "Thầy Cả sư, thầy Bà cả, bà Bóng, ông Kadhar" }
    ]
  },

  "cuoi-hoi": {
    category: "Văn hóa Chăm",
    icon: "💍",
    title: "Phong Tục Cưới Hỏi",
    image: "cuoi-hoi-cham.jpg", // TODO: thêm ảnh thật, đặt tên đúng "cuoi-hoi-cham.jpg"
    video: "https://www.youtube.com/embed/z-7iCxVyav0",
    desc: [
      "Phong tục cưới hỏi của người Chăm mang đậm dấu ấn chế độ mẫu hệ, trong đó nhà gái thường là bên chủ động hỏi cưới và tổ chức lễ cưới, chú rể sau khi cưới sẽ về sống bên nhà vợ.",
      "Lễ cưới truyền thống trải qua nhiều nghi thức như lễ dạm hỏi, lễ hỏi chính thức và lễ cưới, với sự tham gia của các chức sắc tôn giáo làm lễ chúc phúc cho đôi vợ chồng theo tín ngưỡng của mỗi cộng đồng (Bàlamôn, Bàni hay Islam).",
      "Trong lễ cưới, các món ăn truyền thống như bánh gừng, trang phục thổ cẩm và các nghi thức trao lễ vật đóng vai trò quan trọng, thể hiện sự gắn kết giữa hai gia đình và cộng đồng làng xóm."
    ],
    facts: [
      { icon: "👪", label: "Chế độ", value: "Theo mẫu hệ, nhà gái chủ động cưới hỏi" },
      { icon: "🎭", label: "Nghi thức", value: "Dạm hỏi, lễ hỏi, lễ cưới chính thức" },
      { icon: "🍰", label: "Lễ vật đặc trưng", value: "Bánh gừng, trang phục thổ cẩm" }
    ]
  },

  /* =====================================================
     5. NGHỆ THUẬT DÂN GIAN
     ===================================================== */

  "mua-cham": {
    category: "Nghệ thuật dân gian",
    icon: "💃",
    title: "Múa Chăm",
    image: "mua-cham.jpg", // TODO: thêm ảnh thật, đặt tên đúng "mua-cham.jpg"
    video: "https://www.youtube.com/embed/_UH7IB5xZo4",
    desc: [
      "Múa Chăm là loại hình nghệ thuật trình diễn gắn liền với các nghi lễ tôn giáo và lễ hội truyền thống, đặc biệt phổ biến trong lễ hội Katê và các nghi lễ tại tháp Chăm.",
      "Các điệu múa tiêu biểu như múa quạt, múa đội lu (đội bình nước trên đầu), múa lụa... do các vũ nữ biểu diễn với động tác uyển chuyển, kết hợp nhịp nhàng cùng tiếng trống Ghi-năng và kèn Saranai.",
      "Múa Chăm không chỉ mang giá trị nghệ thuật mà còn chứa đựng ý nghĩa tâm linh sâu sắc, thể hiện lòng tôn kính thần linh và cầu mong mưa thuận gió hòa, mùa màng bội thu."
    ],
    facts: [
      { icon: "💃", label: "Điệu múa tiêu biểu", value: "Múa quạt, múa đội lu, múa lụa" },
      { icon: "🎭", label: "Bối cảnh", value: "Lễ hội Katê, nghi lễ tại tháp Chăm" },
      { icon: "🥁", label: "Đi kèm", value: "Trống Ghi-năng, kèn Saranai" }
    ]
  },

  "trong-ghinang": {
    category: "Nghệ thuật dân gian",
    icon: "🥁",
    title: "Trống Ghi-năng",
    image: "trong-ghinang.jpg", // TODO: thêm ảnh thật, đặt tên đúng "trong-ghinang.jpg"
    video: "https://www.youtube.com/embed/gcIlhQAUKbo",
    desc: [
      "Trống Ghi-năng (Ginang) là một trong những nhạc cụ truyền thống quan trọng nhất của người Chăm, thường được sử dụng trong các nghi lễ tôn giáo và lễ hội như Katê, Rija Nagar.",
      "Trống có thân dài hình trụ, hai mặt trống được bịt bằng da thuộc, một mặt vỗ bằng tay và một mặt đánh bằng dùi. Người chơi trống thường là nam giới, đóng vai trò dẫn nhịp cho các điệu múa và nghi lễ.",
      "Âm thanh trầm hùng của trống Ghi-năng kết hợp cùng kèn Saranai và trống Paranưng tạo nên dàn nhạc lễ đặc trưng, không thể thiếu trong đời sống văn hóa tâm linh của người Chăm."
    ],
    facts: [
      { icon: "🥁", label: "Cấu tạo", value: "Thân dài hình trụ, hai mặt bịt da" },
      { icon: "🙌", label: "Cách chơi", value: "Một mặt vỗ tay, một mặt đánh bằng dùi" },
      { icon: "🎭", label: "Vai trò", value: "Dẫn nhịp cho múa và nghi lễ tôn giáo" }
    ]
  },

  "ken-saranai": {
    category: "Nghệ thuật dân gian",
    icon: "🎺",
    title: "Kèn Saranai",
    image: "ken-saranai.jpg", // TODO: thêm ảnh thật, đặt tên đúng "ken-saranai.jpg"
    video: "https://www.youtube.com/embed/PuCGMojVNbA",
    desc: [
      "Kèn Saranai là nhạc cụ hơi truyền thống của người Chăm, có âm sắc cao vút, vang xa, thường xuất hiện trong các nghi lễ tôn giáo quan trọng và lễ hội Katê.",
      "Kèn được làm từ gỗ hoặc sừng, thân kèn có nhiều lỗ bấm để tạo giai điệu, phần loa kèn thường được chạm khắc hoa văn tinh xảo. Người thổi kèn phải có kỹ thuật lấy hơi đặc biệt để tạo ra âm thanh liên tục, không ngắt quãng.",
      "Cùng với trống Ghi-năng và Paranưng, kèn Saranai tạo nên bộ ba nhạc cụ chủ đạo trong dàn nhạc lễ Chăm, góp phần tạo nên không khí linh thiêng, trang trọng cho các nghi thức tôn giáo."
    ],
    facts: [
      { icon: "🎺", label: "Chất liệu", value: "Gỗ hoặc sừng" },
      { icon: "🎵", label: "Âm sắc", value: "Cao vút, vang xa" },
      { icon: "🎭", label: "Sử dụng", value: "Nghi lễ tôn giáo, lễ hội Katê" }
    ]
  },

  "paranung": {
    category: "Nghệ thuật dân gian",
    icon: "🪘",
    title: "Trống Paranưng",
    image: "trong-paranung.jpg", // TODO: thêm ảnh thật, đặt tên đúng "trong-paranung.jpg"
    video: "https://www.youtube.com/embed/gBQmka3u4rc",
    desc: [
      "Trống Paranưng là loại trống một mặt hình tròn, dẹt, thường được các thầy Kadhar (thầy vỗ trống hát lễ) sử dụng trong các nghi lễ tôn giáo của người Chăm Bàlamôn.",
      "Mặt trống được bịt bằng da dê, thân trống làm bằng gỗ nhẹ, người chơi thường đặt trống ngang trước bụng và vỗ bằng cả hai tay để tạo nhịp điệu vừa dẫn dắt lời hát lễ (Ariya) vừa đệm cho các nghi thức cúng tế.",
      "Paranưng gắn liền với hình ảnh ông Kadhar trong các nghi lễ Rija, Katê, được xem là nhạc cụ mang tính linh thiêng, kết nối giữa con người với thần linh trong tín ngưỡng Chăm."
    ],
    facts: [
      { icon: "🪘", label: "Cấu tạo", value: "Trống một mặt, hình tròn, dẹt" },
      { icon: "🐐", label: "Chất liệu mặt trống", value: "Da dê" },
      { icon: "👳", label: "Người chơi", value: "Thầy Kadhar trong nghi lễ tôn giáo" }
    ]
  }

};