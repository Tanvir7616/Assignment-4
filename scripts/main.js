document.addEventListener("DOMContentLoaded", function () {

    // Initial refresh
    refreshDashboard();

    // -----------------------
    // Interview buttons
    // -----------------------
    document.querySelectorAll(".interview-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            updateStatus(this, "INTERVIEW");
            refreshDashboard();
        });
    });

    // -----------------------
    // Rejected buttons
    // -----------------------
    document.querySelectorAll(".rejected-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            updateStatus(this, "REJECTED");
            refreshDashboard();
        });
    });

    // -----------------------
    // Delete buttons
    // -----------------------
    document.querySelectorAll(".delete-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const card = this.closest('.job-card');
            card.remove();
            refreshDashboard();
        });
    });

    // -----------------------
    // Filter buttons
    // -----------------------
    document.getElementById("filter-all").addEventListener("click", function () {
        filterJobs("ALL");
    });

    document.getElementById("filter-interview").addEventListener("click", function () {
        filterJobs("INTERVIEW");
    });

    document.getElementById("filter-rejected").addEventListener("click", function () {
        filterJobs("REJECTED");
    });

});

// -----------------------
// Filter function
// -----------------------
function filterJobs(type) {
    const allCards = document.querySelectorAll('.job-card');

    allCards.forEach(card => {
        const status = card.querySelector('.status-label').innerText;

        if (type === "ALL" || status === type) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}