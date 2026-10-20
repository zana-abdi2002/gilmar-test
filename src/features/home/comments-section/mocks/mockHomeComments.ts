import { HomeComment } from "../types";

export const mockHomeComments: HomeComment[] = [
  {
    id: "comment-1",
    title: "اقامتی آرام و دل‌نشین",
    description:
      "تجربه‌ای فوق‌العاده در دل طبیعت بود. فضای اقامتگاه بسیار آرام و تمیز بود و رفتار کارکنان حس خوبی به ما می‌داد.",
    author: {
      firstName: "زانا",
      lastName: "عبدی",
      role: "guest",
      avatar: {
        src: "/images/reviewer-1.png",
      },
    },
  },
  {
    id: "comment-2",
    title: "طبیعتی چشم‌نواز",
    description:
      "منظره‌های اطراف اقامتگاه واقعاً زیبا بود. صبح‌ها با صدای پرندگان از خواب بیدار می‌شدیم و از حضور در اینجا لذت بردیم.",
    author: {
      firstName: "علی",
      lastName: "رضایی",
      role: "owner",
      avatar: {
        src: "/images/reviewer-2.png",
      },
    },
  },
  {
    id: "comment-3",
    title: "انتخابی عالی برای خانواده",
    description:
      "اتاق‌ها تمیز و راحت بودند و فضای مجموعه برای کودکان هم بسیار مناسب بود. حتماً دوباره به گیل‌مار برمی‌گردیم.",
    author: {
      firstName: "نگار",
      lastName: "کریمی",
      role: "guest",
      avatar: {
        src: "/images/reviewer-3.png",
      },
    },
  },
  {
    id: "comment-4",
    title: "خاطره‌ای فراموش‌نشدنی",
    description:
      "از لحظه ورود تا زمان رفتن، همه‌چیز عالی بود. دسترسی به طبیعت، طراحی اقامتگاه و خدمات، این سفر را به تجربه‌ای خاص تبدیل کرد.",
    author: {
      firstName: "محمد",
      lastName: "حسینی",
      role: "guest",
      avatar: {
        src: "/images/reviewer-4.png",
      },
    },
  },
  {
    id: "comment-5",
    description:
      "اگر به دنبال مکانی دنج برای فاصله گرفتن از شلوغی شهر هستید، گیل‌مار انتخاب بسیار خوبی است. آرامش اینجا واقعاً بی‌نظیر است.",
    author: {
      firstName: "مریم",
      lastName: "موسوی",
      role: "guest",
      avatar: {
        src: "/images/reviewer-5.png",
      },
    },
  },
];
