const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
  {
    id: 4,
    text: "The US Army Air Corps bomber crews had a higher number of casualties in WWII than then entire United States Marine Corps",
    source:
      "https://www.amazon.com/Masters-Air-Americas-Against-Germany/dp/0743235452",
    category: "history",
    votesInteresting: 10,
    votesMindblowing: 245,
    votesFalse: 0,
    createdIn: 2024,
  },
];

// selecting DOM elements.
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// create DOM elements.
factsList.innerHTML = "";

//Load data from Supabase
loadFacts();
async function loadFacts() {
  const res = await fetch(
    "https://lbvzlwqkrdhudqywajbw.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxidnpsd3FrcmRodWRxeXdhamJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY5MTU2ODgsImV4cCI6MjAyMjQ5MTY4OH0.7gbWa4eI6FI5c_zOx49uLtOSf26p6MM3ctxo1pv4FuA",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxidnpsd3FrcmRodWRxeXdhamJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY5MTU2ODgsImV4cCI6MjAyMjQ5MTY4OH0.7gbWa4eI6FI5c_zOx49uLtOSf26p6MM3ctxo1pv4FuA",
      },
    }
  );
  const data = await res.json();
  //   console.log(data);
  const filteredData = data.filter((fact) => fact.category === "society");
  createFactsList(data);
}

function createFactsList(dataArr) {
  const htmlArr = dataArr.map(
    (fact) => `<li class="fact">
  <p>
  ${fact.text}
  <a
    class="source"
    href=${fact.source}
    target="_blank"
    >(Source)</a>
</p>
<span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }"
  >#${fact.category}</span>
</li>`
  );

  //   console.log(htmlArr);
  const html = htmlArr.join(" ");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// toggle form visibility.
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});

// console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
// console.log([7, 64, 6, -23, 11].find((el) => el > 10));
