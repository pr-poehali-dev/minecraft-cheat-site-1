import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    { icon: "Eye", title: "ESP", description: "Видимость игроков через стены" },
    { icon: "Target", title: "Aimbot", description: "Автонаведение на цель" },
    { icon: "Crosshair", title: "Triggerbot", description: "Автоматическая стрельба" },
    { icon: "Zap", title: "Killaura", description: "Атака во все стороны" },
    { icon: "Footprints", title: "Tracers", description: "Линии к игрокам" },
    { icon: "Box", title: "ChestESP", description: "Подсветка сундуков" },
    { icon: "Users", title: "MobESP", description: "Видимость мобов" },
    { icon: "Lightbulb", title: "Fullbright", description: "Полное освещение" },
    { icon: "Mountain", title: "Xray", description: "Видимость руд" },
    { icon: "Rocket", title: "Fly", description: "Режим полёта" },
    { icon: "Gauge", title: "Speed", description: "Увеличение скорости" },
    { icon: "Shield", title: "NoFall", description: "Отмена урона от падения" },
    { icon: "Heart", title: "Regen", description: "Быстрая регенерация" },
    { icon: "Waves", title: "Jesus", description: "Ходьба по воде" },
    { icon: "Pickaxe", title: "FastBreak", description: "Быстрая добыча блоков" },
    { icon: "Hand", title: "FastPlace", description: "Быстрая установка блоков" },
    { icon: "Scroll", title: "AutoTotem", description: "Автоматическое использование тотема" },
    { icon: "Swords", title: "AutoArmor", description: "Автоматическое надевание брони" },
    { icon: "Apple", title: "AutoEat", description: "Автоматическое питание" },
    { icon: "Navigation", title: "Scaffold", description: "Автоматическая постройка мостов" },
    { icon: "Ghost", title: "NoClip", description: "Прохождение сквозь стены" },
    { icon: "Timer", title: "Timer", description: "Ускорение игры" },
    { icon: "Sparkles", title: "AntiKnockback", description: "Отмена отбрасывания" },
    { icon: "Ban", title: "AntiBot", description: "Игнорирование ботов" },
    { icon: "MessagesSquare", title: "AutoChat", description: "Автоматические сообщения" },
    { icon: "Crosshair", title: "CrystalAura", description: "Автоматические кристаллы" },
    { icon: "Flame", title: "BowAimbot", description: "Наведение для лука" },
    { icon: "Sword", title: "Criticals", description: "Критические удары" },
    { icon: "Shield", title: "AutoShield", description: "Автоматический щит" },
    { icon: "Tent", title: "AntiAFK", description: "Защита от кика" },
    { icon: "Building", title: "Freecam", description: "Свободная камера" },
    { icon: "Map", title: "Minimap", description: "Мини-карта" },
    { icon: "Compass", title: "Radar", description: "Радар игроков" },
    { icon: "Search", title: "ChestFinder", description: "Поиск сундуков" },
    { icon: "Gem", title: "OreFinder", description: "Поиск руд" },
    { icon: "Home", title: "BaseSearch", description: "Поиск баз" },
    { icon: "Wind", title: "Elytra+", description: "Улучшенные элитры" },
    { icon: "Anchor", title: "AutoFish", description: "Автоматическая рыбалка" },
    { icon: "Pickaxe", title: "Nuker", description: "Разрушение вокруг" },
    { icon: "Building2", title: "BuildAssist", description: "Помощь в строительстве" },
    { icon: "Zap", title: "AutoClicker", description: "Автоматические клики" },
    { icon: "Move", title: "Step", description: "Увеличенный шаг" },
    { icon: "Sprout", title: "AutoFarm", description: "Автоматическая ферма" },
    { icon: "Package", title: "InventoryMove", description: "Движение в инвентаре" },
    { icon: "Eye", title: "Wallhack", description: "Видимость сквозь блоки" },
    { icon: "Target", title: "Trajectories", description: "Траектория снарядов" },
    { icon: "MessageCircle", title: "NameTags", description: "Улучшенные ники" },
    { icon: "Binary", title: "HUD", description: "Игровой интерфейс" },
    { icon: "Palette", title: "CustomESP", description: "Настраиваемая подсветка" },
    { icon: "Settings", title: "Configs", description: "Конфигурации" },
    { icon: "Save", title: "AutoSave", description: "Автосохранение" },
    { icon: "Download", title: "AutoUpdate", description: "Автообновление" },
    { icon: "Lock", title: "Panic", description: "Быстрое отключение" },
    { icon: "Key", title: "Keybinds", description: "Настройка клавиш" },
    { icon: "Sliders", title: "ClickGUI", description: "Графический интерфейс" }
  ];

  const advantages = [
    {
      icon: "Cpu",
      title: "Оптимизация",
      description: "Минимальное влияние на FPS, работает даже на слабых ПК"
    },
    {
      icon: "ShieldCheck",
      title: "Обходы",
      description: "Успешный обход популярных античитов"
    },
    {
      icon: "Sparkles",
      title: "Визуалы",
      description: "Красивые ESP, шейдеры и эффекты"
    }
  ];

  const prices = [
    {
      title: "На месяц",
      price: "300₽",
      period: "30 дней",
      features: ["Все функции", "Обновления", "Поддержка 24/7"]
    },
    {
      title: "На год",
      price: "450₽",
      period: "365 дней",
      popular: true,
      features: ["Все функции", "Обновления", "Поддержка 24/7", "Скидка 87%"]
    },
    {
      title: "Навсегда",
      price: "700₽",
      period: "Lifetime",
      features: ["Все функции", "Обновления", "Поддержка 24/7", "Лучшая цена"]
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 animate-glow"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="relative z-10">
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
            <Badge className="text-lg px-6 py-2 bg-primary/20 border-primary/50 text-primary animate-glow">
              <Icon name="Zap" className="inline mr-2" size={20} />
              Minecraft Cheat
            </Badge>
            <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              ASTARIX
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto font-light">
              Мощный чит для Minecraft с 50+ функциями
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform shadow-lg shadow-primary/50">
                <Icon name="Download" className="mr-2" size={24} />
                Купить сейчас
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-primary/10 hover:scale-105 transition-transform">
                <Icon name="PlayCircle" className="mr-2" size={24} />
                Демо
              </Button>
            </div>
          </div>
        </section>

        <section id="advantages" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Наши преимущества
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/20">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-lg shadow-primary/50">
                      <Icon name={advantage.icon} size={32} className="text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg text-muted-foreground">
                      {advantage.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Функции
            </h2>
            <p className="text-center text-xl text-muted-foreground mb-16">Более 50 мощных функций для полного контроля</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/40 transition-all hover:scale-105 group">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary group-hover:to-secondary transition-all shadow-md">
                      <Icon name={feature.icon} size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Цены
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {prices.map((plan, index) => (
                <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-2xl shadow-primary/50 scale-105' : 'border-primary/20'} bg-card/50 backdrop-blur-sm hover:scale-105 transition-all`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-1">
                        Популярно
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.title}</CardTitle>
                    <div className="mt-4">
                      <span className="text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{plan.price}</span>
                    </div>
                    <CardDescription className="text-lg mt-2">{plan.period}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' : ''}`} size="lg">
                      Купить
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Контакты
            </h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами для покупки или вопросов</p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Button size="lg" className="bg-[#0088cc] hover:bg-[#0088cc]/90" asChild>
                <a href="https://t.me/astarix_cheat" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" className="mr-2" size={24} />
                  Telegram
                </a>
              </Button>
              <Button size="lg" className="bg-[#5865F2] hover:bg-[#5865F2]/90" asChild>
                <a href="https://discord.gg/astarix" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" className="mr-2" size={24} />
                  Discord
                </a>
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary" asChild>
                <a href="mailto:support@astarix.com">
                  <Icon name="Mail" className="mr-2" size={24} />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </section>

        <footer className="py-12 px-4 border-t border-primary/20">
          <div className="max-w-6xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Icon name="Zap" className="text-primary" size={24} />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">ASTARIX</span>
            </div>
            <p className="text-muted-foreground">© 2024 Astarix. Все права защищены.</p>
            <p className="text-sm text-muted-foreground">Используйте читы только на серверах, где это разрешено.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
