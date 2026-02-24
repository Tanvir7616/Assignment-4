function updateStatus(buttonElement, newStatus) {

    var card = buttonElement.closest('.job-card');
    var label = card.querySelector('.status-label');

    label.innerText = newStatus;

    if (newStatus === "INTERVIEW") {
        label.className = "status-label inline-block text-[10px] bg-green-100 text-green-600 px-2 py-1 rounded mb-3 font-bold uppercase";
    }
    else if (newStatus === "REJECTED") {
        label.className = "status-label inline-block text-[10px] bg-red-100 text-red-500 px-2 py-1 rounded mb-3 font-bold uppercase";
    }

    refreshDashboard();
}