import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { LabelText } from "./components/LabelText/LabelText";
import { Statistics } from "./components/Statistics/Statistics";
import { Slider } from "./components/Slider/Slider";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <LabelText
        wideTitle={true}
        label="Про нас"
        title="Індивідуальний підхід та гнучкість для створення цифрових рішень"
        description="Наша команда працює над тим, щоб кожне рішення було максимально адаптивним, інтуїтивним і орієнтованим на вашого кінцевого користувача."
      />
      <Statistics />
      <LabelText
        wideTitle={false}
        label="Кейси"
        title="Реалізовані ідеї наших клієнтів"
        description="Мрія створювати індивідуальні рішення, надаючи можливість реалізувати потенціал у цифровому світі, втілилась в наших кейсах. Ми віримо, що кожен бізнес унікальний, і допомагаємо розкрити це через вебсайти та онлайн-платформи."
      />
      <Slider />
      <Footer />
    </>
  )
};

export default App;
