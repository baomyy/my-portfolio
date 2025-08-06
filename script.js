// ------------------------------
// Ngôn ngữ và chủ đề giao diện
// ------------------------------

const translations = {
  vi: {
    title: "Portfolio - Nguyễn Lê Bảo My",
    name: "Nguyễn Lê Bảo My",
    "nav.about": "Giới thiệu",
    "nav.tools": "Công cụ",
    "nav.projects": "Dự án",
    "nav.contact": "Liên hệ",
    "about.title": "Giới thiệu",
     "about.desc": `Tôi là sinh viên năm 2 ngành Công nghệ thông tin tại CTIM, có đam mê với thiết kế truyền thông, minh họa và giao diện số. Tôi mong muốn được thực tập để học hỏi thêm về thiết kế ấn phẩm, kỹ năng sáng tạo và làm việc chuyên nghiệp trong môi trường thực tế. <br /> <strong>Kỹ năng: </strong> <br /> – Thiết kế 2D bằng cả phương pháp thủ công và kỹ thuật số <br /> – Vẽ minh họa truyền thống (tradi) và vẽ kỹ thuật số (digi) <br /> – Chụp ảnh bằng máy ảnh kỹ thuật số <br /> – Tư duy thẩm mỹ và khả năng giải quyết vấn đề bằng giải pháp sáng tạo`,
    "tools.title": "Công cụ",
    "tools.1": "🎨 Adobe Illustrator",
    "tools.2": "🖍 CorelDraw",
    "tools.3": "🖌 Adobe Photoshop",
    "tools.4": "📱 Canva, CapCut, ibisPaint",
    "projects.title": "Dự án",
    "projects.1.title": "Kẹo tứ quý – Nàng Hương",
    "projects.1.desc": "Nàng Hương là thương hiệu kẹo mang phong cách ngọt ngào, dễ thương và mộng mơ. Không chỉ bán kẹo, Nàng Hương gói ghém cảm xúc qua từng chi tiết nhỏ, tạo nên những khoảnh khắc dịu dàng trong cuộc sống.",
    "projects.1.pageTitle": "Chi tiết dự án – Nàng Hương",
    "projects.1.p1": "Nàng Hương là thương hiệu mang trong mình hơi thở ngọt ngào và những rung động dịu dàng. Không chỉ là một cái tên, Nàng Hương là hiện thân của những khoảnh khắc mộng mơ – nơi ánh nắng len qua khung cửa sổ, tiếng cười khe khẽ vang lên khi một món quà nhỏ được mở ra, và làn hương thoảng nhẹ đủ khiến lòng người chợt mỉm cười.",
    "projects.1.p2": "Lấy cảm hứng từ hình ảnh một cô gái nhỏ xoay mình giữa thế giới kẹo ngọt, Nàng Hương gợi nhắc đến một nàng thơ tinh tế, mong manh – người gửi gắm yêu thương qua từng món quà được chăm chút kỹ lưỡng. Không vội vã, không ồn ào, thương hiệu chọn lối đi nhẹ nhàng: mỗi viên kẹo, mỗi chiếc nơ, mỗi sắc màu đều được nâng niu như cách ai đó gửi trọn trái tim vào một lá thư tay.",
    "projects.1.p3": "Nàng Hương không chỉ bán kẹo. Chúng tôi gói ghém cảm xúc. Là niềm vui lấp lánh trong ánh mắt người nhận. Là mùi thơm gợi nhớ một mùa hè xa xưa. Là cảm giác rung rinh khi chạm tay vào chiếc túi giấy xinh có nơ cài tinh tế. Là những khoảnh khắc nhỏ bé nhưng đủ khiến cuộc sống dịu dàng hơn một chút.",
    "projects.1.p4": "Phong cách thương hiệu theo đuổi là dễ thương, ngọt ngào, mộng mơ, nhưng không thiếu sự tinh tế và chiều sâu cảm xúc. Mọi yếu tố nhận diện từ logo, bảng màu đến kiểu chữ đều được thiết kế để đánh thức cảm giác trong trẻo nhất nơi người dùng, như một viên kẹo mềm làm tan biến mệt mỏi giữa ngày bận rộn.",
    "projects.1.p5": "Nàng Hương là một lát cắt ngọt ngào trong cuộc sống thường nhật. Là nơi yêu thương bắt đầu từ những điều bé xíu.",
    "projects.2.title": "Trà đạo quán – Liễu Hiên Nguyệt",
    "projects.2.desc": "Liễu Hiên Nguyệt là trà đạo quán mang phong cách truyền thống, tạo không gian tĩnh lặng để thưởng trà và tìm lại sự an yên giữa cuộc sống hối hả.",
    "projects.2.pageTitle": "Chi tiết dự án – Liễu Hiên Nguyệt",
    "projects.2.p1": "Liễu Hiên Nguyệt  được xây dựng dựa trên tinh thần gìn giữ và tôn vinh bản sắc Việt, lấy cảm hứng từ nghệ thuật trà đạo truyền thống cùng những giá trị văn hóa lâu đời. Mục tiêu không chỉ là tạo dựng một thương hiệu trà chất lượng, mà còn hình thành nên một không gian thưởng trà thanh tịnh, nơi lan tỏa tinh thần thư thái và lối sống tinh tế của người Việt. ",
    "projects.2.p2": "Hệ thống nhận diện bao gồm logo, bảng màu, kiểu chữ và hình ảnh sử dụng trong không gian, sản phẩm cũng như các tài liệu truyền thông. Mọi yếu tố đều được chắt lọc từ chất liệu dân gian, nhằm tạo nên một tổng thể thương hiệu vừa gần gũi, mộc mạc vừa sang trọng và tinh tế.",
    "projects.2.p3": "Logo được phát triển từ hình ảnh ấn triện truyền thống, kết hợp cùng sắc đỏ son – màu của may mắn, cát tường và nét hoài cổ. Biểu tượng logo mang dáng vẻ vững chãi, uy nghi, nhưng vẫn giữ được sự mềm mại, hài hòa, phản ánh đúng tinh thần nghệ thuật trà đạo.",
    "projects.2.p4": "Màu sắc chủ đạo là đỏ son, đi cùng các tông màu trầm ấm của gỗ, gốm sứ và giấy dó. Bảng màu mang đậm hơi thở văn hóa Việt, tạo nên cảm giác thanh nhã và ấm cúng ngay từ cái nhìn đầu tiên.",
    "projects.2.p5": "Kiểu chữ được lựa chọn là sự hòa quyện giữa thư pháp Việt và các đường nét mềm mại, vừa thanh lịch nhẹ nhàng, vừa chứa đựng chiều sâu văn hóa. Font chữ không chỉ thẩm mỹ mà còn giúp khách hàng dễ ghi nhớ hình ảnh thương hiệu.",
    "projects.2.p6": "Sự tỉ mỉ trong từng chi tiết, sự am hiểu chất liệu truyền thống và tinh thần cân bằng trong bố cục là những yếu tố then chốt giúp Liễu Hiên Nguyệt trở thành không chỉ là một quán trà, mà là chốn an nhiên giữa lòng phố thị – nơi lưu giữ và tôn vinh tinh hoa trà Việt.",
    "projects.2.durationLabel": "Thời gian",
    "projects.2.duration": "1 tháng",
    "projects.3.title": "Những điều nhỏ bé",
    "projects.3.desc": "Những điều nhỏ bé được gom góp theo thời gian.",
    "projects.3.pageTitle": "Chi tiết dự án – Khác",
    "projects.3.p1": "Đây là tập hợp một số tác phẩm nhỏ, những ý tưởng chớm nở hay khoảnh khắc tình cờ được lưu giữ lại theo thời gian. Dù không thuộc một dự án lớn cụ thể nào, nhưng mỗi bức hình, mỗi thiết kế đều chứa đựng cảm xúc, màu sắc và câu chuyện riêng.",
    "projects.3.p2": "Những điều nhỏ bé thường bị lướt qua, nhưng lại chính là nơi ta tìm thấy vẻ đẹp chân thành và sự kết nối sâu sắc nhất. Đây cũng là không gian để thử nghiệm, khám phá phong cách cá nhân, và ghi lại quá trình trưởng thành trong sáng tạo.",
    "projects.3.form": "Hình thức:",
    "projects.3.formDetail": "Tổng hợp đa dạng (minh họa, nhiếp ảnh, thiết kế)",
    "projects.backHome": "🏠 Về trang chủ",
    "contact.title": "Liên hệ",
    "contact.phone": "Điện thoại: ",
    "footer": "&copy; 2025 Nguyễn Lê Bảo My. Bản quyền đã được bảo vệ."
  },
  en: {
    title: "Portfolio - Nguyen Le Bao My",
    name: "Nguyen Le Bao My",
    "nav.about": "About",
    "nav.tools": "Tools",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "about.title": "About Me",
    "about.desc": `I am a second-year Information Technology student at CTIM, with a passion for media design, illustration, and digital interfaces. I am seeking an internship to further develop my skills in publication design, creative thinking, and professional work in a real-world environment.</br> <strong>Skills: </strong> </br>– 2D design using both traditional and digital methods</br>– Traditional and digital illustration (tradi & digi) </br>– Photography with a digital camera </br>– Aesthetic thinking and problem-solving through creative solutions`,
    "tools.title": "Tools",
    "tools.1": "🎨 Adobe Illustrator",
    "tools.2": "🖍 CorelDraw",
    "tools.3": "🖌 Adobe Photoshop",
    "tools.4": "📱 Canva, CapCut, ibisPaint",
    "projects.title": "Projects",
    "projects.1.title": "Nang Huong – Candy of Four Seasons",
    "projects.1.desc": "Nang Huong is a sweet and dreamy candy brand that captures emotions through thoughtful details, turning simple moments into gentle joys.",
    "projects.1.pageTitle": "Project Detail – Nang Huong",
    "projects.1.p1": "Nang Huong is a brand infused with sweetness and gentle emotions. More than just a name, Nàng Hương embodies dreamy moments where sunlight filters through the window, soft laughter echoes as a tiny gift is unwrapped, and a delicate scent lingers just enough to bring a quiet smile to the heart.",
    "projects.1.p2": "Inspired by the image of a little girl twirling in a world of sweets, Nang Huong evokes a delicate, poetic muse one who gently conveys love through thoughtfully crafted gifts. No rush, no noise the brand follows a soft, graceful path: each candy, each ribbon, each color is cherished, like someone pouring their heart into a handwritten letter.",
    "projects.1.p3": "Nang Huong doesn't just sell candy we wrap emotions. It's the sparkle of joy in someone's eyes. The scent that brings back a long-lost summer. The flutter of delight when touching a dainty paper bag tied with a graceful ribbon. It's the little moments that gently make life feel a bit softer.",
    "projects.1.p4": "The brand embraces a style that is cute, sweet, and dreamy yet never lacking in elegance or emotional depth. Every element, from the logo and color palette to the typography, is thoughtfully designed to awaken a sense of gentle clarity in the hearts of users like a soft candy that melts away the fatigue of a busy day.",
    "projects.1.p5": "Nàng Hương is a sweet slice of everyday life a place where love begins with the tiniest of things.",
    "projects.2.title": "Lieu Hien Nguyet – Teahouse",
    "projects.2.desc": "Lieu Hien Nguyet is a traditional-style teahouse offering a tranquil space for tea appreciation and inner peace amidst the hustle of modern life.",
    "projects.2.pageTitle": "Project Detail – Lieu Hien Nguyet",
    "projects.2.p1": "Lieu Hien Nguyet is founded on the spirit of preserving and honoring Vietnamese cultural identity, drawing inspiration from the traditional art of trà đạo and time-honored values. Its goal is not only to build a high-quality tea brand, but also to create a serene tea-drinking space a place that reflects the elegance and tranquility of the Vietnamese way of life.",
    "projects.2.p2": "The brand identity system includes the logo, color palette, typography, and imagery used across the space, products, and communication materials. Each element is thoughtfully distilled from traditional cultural motifs, creating a brand presence that is both rustic and familiar, yet elegant and refined.",
    "projects.2.p3": "The logo is developed from the image of a traditional seal stamp, combined with a deep vermilion red a color symbolizing luck, prosperity, and nostalgic charm. Its design carries a sense of strength and dignity, yet remains soft and balanced, capturing the true spirit of the art of trà đạo.",
    "projects.2.p4": "The primary color is vermilion red, complemented by warm, earthy tones inspired by wood, ceramics, and dó paper. This color palette reflects the essence of Vietnamese culture, evoking a sense of elegance and warmth from the very first glance.",
    "projects.2.p5": "The chosen typography blends elements of Vietnamese calligraphy with gentle, flowing lines striking a balance between elegance and cultural depth. It is not only visually appealing but also enhances brand recognition, making it easier for customers to remember the brand’s identity.",
    "projects.2.p6": "Meticulous attention to detail, a deep understanding of traditional materials, and a balanced sense of composition are the key elements that make Lieu Hien Nguyet more than just a teahouse it is a tranquil haven in the heart of the city, devoted to preserving and celebrating the essence of Vietnamese tea culture.",
    "projects.2.durationLabel": "Duration",
    "projects.2.duration": "1 month",
    "projects.3.title": "The Little Things",
    "projects.3.desc": "The little things, quietly collected through the passage of time.",
    "projects.3.pageTitle": "Project Detail – Other",
    "projects.3.p1": "This is a collection of small works early ideas and spontaneous moments preserved over time. Though not part of any major project, each image and design carries its own emotion, color, and story.",
    "projects.3.p2": "The little things are often overlooked, yet they are where we find the most genuine beauty and deepest connections. This is also a space for experimentation, personal style exploration, and capturing the journey of creative growth.",
    "projects.3.form": "Format:",
    "projects.3.formDetail": "Various forms (illustration, photography, design)",
    "projects.backHome": "🏠 Back to Home",
    "contact.title": "Contact",
    "contact.phone": "Phone: 0365135107",
    "footer": "&copy; 2025 Nguyen Le Bao My. All rights reserved."
  }
};

let currentLang = localStorage.getItem("lang") || "vi";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  if (translations[lang].title) document.title = translations[lang].title;
}

const langToggle = document.getElementById("langToggle");
if (langToggle) {
  langToggle.addEventListener("click", () => {
    const newLang = currentLang === "vi" ? "en" : "vi";
    setLanguage(newLang);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
});
