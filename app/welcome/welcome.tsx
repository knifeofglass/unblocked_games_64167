export function Welcome() {
  return (
    <>
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center">Unblocked games 674189</h1>
      </header>
      <main className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 p-10">
        {games.map((game) => (
          <div className="game-item" key={game.id}>
            <a href={game.url} target="_blank" className="flex flex-col items-center justify-center h-full">
              <img src={game.image} alt={game.name} className="mb-4 h-24 w-24 object-contain" />
              <span className="text-lg font-semibold text-center">{game.name}</span>
            </a>
          </div>
        ))}
      </main>
    </>
  );
}

const games = [
  { id: "survival-race", name: "Race Game", url: "https://sites.google.com/view/drive-u-7-home/survival-race", image: "images/survival-race.png"},
  { id: "math-games", name: "Cool Math Games", url: "https://coolmathgames.com", image: "images/cool-math-games.png"},
  { id: "cat-simulator", name: "Cat Simulator", url: "https://sites.goggle.com/site/unblockedgames77/cat-simulator", image: "images/cat-simulator.png"},
  { id: "basket-hoop", name: "Basketball Hoop", url: "https://sites.google.com/site/unblockedgame67/basket-hoop", image: "images/basket-hoop.png"},
  { id: "steal-a-brainrot", name: "Steal A Brainrot", url: "https://sites.google.com/view/drive-u-7-home/new-games/steal-a-brainrot-1", image: "images/steal-a-brainrot.jpeg"},
  { id: "gunspin", name: "Gunspin", url: "https://sites.google.com/view/drive-u-7-home/gunspin", image: "images/gunspin.png"},
  { id: "arc", name: "Arc", url: "https://sites.google.com/view/drive-u-7-home/archers", image: "images/arc.png"},
  { id: "99-nights-online", name: "99 Nights Online", url: "https://sites.google.com/view/drive-u-7-home/99-nights-online", image: "images/99-nights-online.png"},
  { id: "head-soccer-2022", name: "Head Soccer 2022", url: "https://sites.google.com/site/unblockedgames77/head-soccer-2022", image: "images/head-soccer-2022.png"},
]