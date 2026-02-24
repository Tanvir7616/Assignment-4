document.addEventListener("DOMContentLoaded", function () {

    refreshDashboard();

    // Interview buttons
    document.querySelectorAll(".interview-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            updateStatus(this, "INTERVIEW");
            refreshDashboard();
        });
    });

    // Rejected buttons
    document.querySelectorAll(".rejected-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            updateStatus(this, "REJECTED");
            refreshDashboard();
        });
    });

    // Delete buttons
    document.querySelectorAll(".delete-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var card = this.closest('.job-card');
            card.remove();
            refreshDashboard();
        });
    });

    // Filter buttons
    document.getElementById("filter-all").addEventListener("click", function () {
        filterJobs("ALL");
        toggleEmptyState();
    });

    document.getElementById("filter-interview").addEventListener("click", function () {
        filterJobs("INTERVIEW");
        toggleEmptyState();
    });

    document.getElementById("filter-rejected").addEventListener("click", function () {
        filterJobs("REJECTED");
        toggleEmptyState();
    });

});


// Filter function (Safe)
function filterJobs(type) {

    var allCards = document.querySelectorAll('.job-card');

    for (var i = 0; i < allCards.length; i++) {

        var status = allCards[i].querySelector('.status-label').innerText;

        if (type === "ALL") {
            allCards[i].style.display = "block";
        }
        else if (status === type) {
            allCards[i].style.display = "block";
        }
        else {
            allCards[i].style.display = "none";
        }
    }
}

// Toggle Empty State function
function toggleEmptyState() {

    const visibleCards = [...document.querySelectorAll(".job-card")]
        .filter(card => card.style.display !== "none");

    const emptyState = document.getElementById("empty-state");
    const jobCountText = document.getElementById("job-count-text");

    if (visibleCards.length === 0) {
        emptyState.classList.remove("hidden");
    } else {
        emptyState.classList.add("hidden");
    }

    jobCountText.innerText = visibleCards.length + " jobs";
}

// Refresh Dashboard function
function refreshDashboard() {
    toggleEmptyState(); // এখানে call করলে সব update এর পরে empty state ঠিক থাকে
}