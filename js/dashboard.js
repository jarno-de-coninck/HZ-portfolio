(function () {
  function updateProgress() {
    let totalEC = 0;

    document.querySelectorAll("tbody tr").forEach(row => {
      const grade = parseFloat(row.querySelector(".grade")?.value) || 0;
      const ec = parseFloat(row.querySelector(".ec")?.textContent) || 0;
      if (grade >= 5.5) totalEC += ec;
    });

    totalEC = Math.round(totalEC * 10) / 10; // one decimal
    const percent = Math.min(100, (totalEC / 60) * 100);

    const bar = document.getElementById("progress-bar");
    bar.style.width = percent + "%";
    bar.textContent = `${totalEC} / 60 EC`;

    bar.classList.toggle("bg-success", totalEC >= 45);
    bar.classList.toggle("bg-danger", totalEC < 45);

    document.getElementById("progress-note").textContent =
      totalEC >= 45 ? "You are above the NBSA boundary." : "You are below the NBSA boundary.";
  }

  document.addEventListener("input", e => {
    if (e.target.classList.contains("grade")) updateProgress();
  });

  document.addEventListener("DOMContentLoaded", updateProgress);
})();
