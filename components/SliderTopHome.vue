<template>
  <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
    rotate: 10,
    stretch: 0,
    depth: 500,
    modifier: 1,
    slideShadows: true,
  }" :pagination="true" :autoplay="{
  delay: 2300,
  disableOnInteraction: false,
}" :modules="modules" class="mySwiper w-[100%] h-[300px] my-1  sm:w-[90%] sm:h-[350px] md:h-[400px] lg:h-[450px]  ">

    <swiper-slide class=" w-[100%] h-[100%] md:w-[400px] backdrop-blur-md  object-cover bg-center ">
      <img class=" w-[90%] h-[100%] sm:w-[80%] md:w-[90%] lg:w-[95%]  p-1 mx-auto  object-center  rounded-xl  "
        src="../assets/photos/slide-1.jpg" />
      <div dir="rtl"
        class=" w-[80%] sm:w-max  mx-auto left-0 right-0  absolute bottom-7 flex flex-col  backdrop-blur-md rounded-xl p-1  text-white">
        <h3 class=" text-[20px] flex gap-1">دانلود فیلم آکوامن و پادشاهی گمشده 
          <span
            class="p-1 text-[14px] w-max  flex gap-1 bg-yellow-800 rounded-md"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-yellow-300">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            6.519/10
          </span>
        </h3>
        <p class="hidden md:block max-w-md  text-[14px] md:text-[16px] ">
          مانتای سیاه، همچنان به دنبال انتقام مرگ پدرش است و استفاده از قدرت نیزه سه شاخه سیاه افسانه‌ای، از هیچ کاری
          فروگذار نخواهد کرد تا آکوامن را یک بار برای همیشه شکست دهد. برای شکست دا...
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class=" w-[100%] h-[100%] md:w-[400px]  backdrop-blur-md object-cover bg-center ">
      <img class=" w-[90%] h-[100%] sm:w-[80%] md:w-[90%] lg:w-[95%]  p-1 mx-auto object-center bg-center  rounded-xl "
        src="../assets/photos/slide-2.jpg" />
      <div dir="rtl" class=" w-[80%] sm:w-max  mx-auto left-0 right-0 backdrop-blur-md  absolute bottom-7 flex flex-col  p-1 rounded-md  text-white">
        <h3 class=" text-[20px] flex gap-1">فیلم فلش 2023 
          <span
            class="p-1 text-[14px] w-max  flex gap-1  bg-yellow-800 rounded-md"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-yellow-300">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            6.519/10
          </span>
        </h3>
        <p class="hidden md:block max-w-md  text-[14px] md:text-[16px] ">
          فیلم فلش روایت بری آلن است که تصمیم می‌گیرد برای نجات جان مادر خود به زمانی در گذشته سفر کند. اما در این سفر
          زمانی، در یک جهان موازی که بدون وجود ابرانسان‌ها اداره می‌شود به دام می...
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class=" w-[100%] h-[100%] md:w-[400px]  backdrop-blur-md object-cover bg-center    ">
      <img class=" w-[90%] h-[100%] sm:w-[80%] md:w-[90%] lg:w-[95%]  p-1 mx-auto object-center bg-center rounded-xl  "
        src="../assets/photos/slide-3.jpg" />
      <div dir="rtl" class="  w-[80%] sm:w-max  mx-auto left-0 right-0  absolute bottom-7 flex flex-col  backdrop-blur-md rounded-xl p-1  text-white">
        <h3 class=" text-[20px] flex gap-1">فیلم بی مصرف ها 4  
          <span
            class="p-1 text-[14px] w-max  flex gap-1  bg-yellow-800 rounded-md"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-yellow-300">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            6.519/10
          </span>
        </h3>
        <p class="hidden md:block  max-w-md  text-[14px] md:text-[16px] ">
          مسلح به هر سلاحی که بتوانند دست پیدا کنند و مهارت‌های استفاده از آن‌ها، بی‌مصرف‌ها آخرین خط دفاعی جهان و تیمی
          هستند که وقتی دیگر گزینه‌ها روی میز نباشند؛ فراخوان می‌شوند. اما اعضای...
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class=" w-[100%] h-[100%] md:w-[400px]  backdrop-blur-md object-cover bg-center  ">
      <img class=" w-[90%] h-[100%] sm:w-[80%] md:w-[90%] lg:w-[95%]  p-1 mx-auto object-center bg-center rounded-xl  "
        src="../assets/photos/slide-4.jpg" />
      <div dir="rtl" class="  w-[80%] sm:w-max  mx-auto left-0 right-0  absolute bottom-7 flex flex-col  backdrop-blur-md rounded-xl p-1  text-white">
        <h3 class=" text-[20px] flex gap-1">اکولایزر 3 
          <span
            class="p-1 text-[14px] w-max  flex gap-1  bg-yellow-800 rounded-md"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-yellow-300">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            6.519/10
          </span>
        </h3>
        <p class="hidden md:block  max-w-md  text-[14px] md:text-[16px] ">رابرت مک کال به جنوب ایتالیا سفر کرده و اکنون در آرامش زندگی می‌کند، اما
          به زودی متوجه می‌شود که دوستان جدیدش
          تحت کنترل گروهی از جنایتکاران محلی قرار دارند. در این میان با پیچیده ش...</p>
      </div>
    </swiper-slide>
    <swiper-slide class=" w-[100%] h-[100%] md:w-[400px]  backdrop-blur-md object-cover bg-center  ">
      <img class=" w-[90%] h-[100%] sm:w-[80%] md:w-[90%] lg:w-[95%]  p-1  mx-auto object-center bg-center rounded-xl "
        src="../assets/photos/slide-5.jpg" />
      <div dir="rtl" class="  w-[80%] sm:w-max  mx-auto left-0 right-0  absolute bottom-7 flex flex-col  backdrop-blur-md rounded-xl p-1  text-white">
        <h3 class=" text-[20px] flex gap-1">ماموریت غیرممکن 2023  
          <span
            class="p-1 text-[14px] w-max  flex gap-1  bg-yellow-800 rounded-md"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-yellow-300">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            6.519/10
          </span>
        </h3>
        <p class="hidden md:block  max-w-md  text-[14px] md:text-[16px] ">
          ایتن هانت و گروه مأموریت غیرممکن خطرناک‌ترین مأموریت خود برای ردیابی یک سلاح مخوف را آغاز می‌کنند که با قرارگیری
          در دستان افراد سودجو زندگی کل بشریت را تهدید می‌کند. با قرارگیری سر...
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class=" w-[100%] h-[100%] md:w-[400px]  backdrop-blur-md object-cover bg-center  ">
      <img class=" w-[90%] h-[100%] sm:w-[80%] md:w-[90%] lg:w-[95%]  p-1  mx-auto object-center bg-center rounded-xl "
        src="../assets/photos/slide-6.jpg" />
      <div dir="rtl" class="  w-[80%] sm:w-max  mx-auto left-0 right-0  absolute bottom-7 flex flex-col  backdrop-blur-md rounded-xl p-1  text-white">
        <h3 class=" text-[20px] flex gap-1">دانلود فیلم گودزیلا منهای یک 
          <span
            class="p-1 text-[14px] w-max  flex gap-1  bg-yellow-800 rounded-md"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-yellow-300">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            6.519/10
          </span>
        </h3>
        <p class="hidden md:block  max-w-md  text-[14px] md:text-[16px] ">
          در دوران پس از جنگ جهانی دوم، وضعیت اقتصادی ژاپن به حداقل می‌رسد و کشور با مشکلاتی روبرو می‌شود. در این شرایط،
          گودزیلا، هیولای معروف، در ژاپن ظاهر می‌شود و وضعیت کشور را به شدت تحت...
        </p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Autoplay, Pagination],
    };
  },
};
</script>

