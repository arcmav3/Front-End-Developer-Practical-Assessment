const users = [
  {
    id: "1000",
    firstName: "Tuna",
    lastName: "Salmon",
    email: "tuna.salmon@email.com",
    group: "Admin",
    division: "NY",
    region: "Corporate",
    userType: "Admin",
    submitted: "05/01/2025",
    enabledDate: "05/01/2025",
    enabled: true,
  },
  {
    id: "1001",
    firstName: "Crab",
    lastName: "Lobster",
    email: "crab.lobster@email.com",
    group: "Licensed",
    division: "CA",
    region: "West",
    userType: "Licensed",
    submitted: "05/03/2025",
    enabledDate: "05/04/2025",
    enabled: true,
  },
  {
    id: "1002",
    firstName: "Shrimp",
    lastName: "Prawn",
    email: "shrimp.prawn@email.com",
    group: "Recruiter",
    division: "TX",
    region: "South",
    userType: "Recruiter",
    submitted: "05/05/2025",
    enabledDate: "05/05/2025",
    enabled: true,
  },
  {
    id: "1003",
    firstName: "Squid",
    lastName: "Octopus",
    email: "squid.octopus@email.com",
    group: "Forward",
    division: "FL",
    region: "South",
    userType: "Forward",
    submitted: "05/08/2025",
    enabledDate: "05/09/2025",
    enabled: true,
  },
  {
    id: "1004",
    firstName: "Oyster",
    lastName: "Scallop",
    email: "oyster.scallop@email.com",
    group: "Admin",
    division: "IL",
    region: "Midwest",
    userType: "Admin",
    submitted: "05/10/2025",
    enabledDate: "05/11/2025",
    enabled: false,
  },
  {
    id: "1005",
    firstName: "Mackerel",
    lastName: "Sardine",
    email: "mackerel.sardine@email.com",
    group: "Licensed",
    division: "NY",
    region: "Corporate",
    userType: "Licensed",
    submitted: "05/13/2025",
    enabledDate: "05/13/2025",
    enabled: true,
  },
  {
    id: "1006",
    firstName: "Anchovy",
    lastName: "Herring",
    email: "anchovy.herring@email.com",
    group: "Recruiter",
    division: "CA",
    region: "West",
    userType: "Recruiter",
    submitted: "05/15/2025",
    enabledDate: "05/16/2025",
    enabled: true,
  },
  {
    id: "1007",
    firstName: "Mussel",
    lastName: "Clam",
    email: "mussel.clam@email.com",
    group: "Forward",
    division: "TX",
    region: "South",
    userType: "Forward",
    submitted: "05/18/2025",
    enabledDate: "05/18/2025",
    enabled: false,
  },
  {
    id: "1008",
    firstName: "Snapper",
    lastName: "Grouper",
    email: "snapper.grouper@email.com",
    group: "Admin",
    division: "FL",
    region: "South",
    userType: "Admin",
    submitted: "05/20/2025",
    enabledDate: "05/21/2025",
    enabled: true,
  },
  {
    id: "1009",
    firstName: "Cod",
    lastName: "Halibut",
    email: "cod.halibut@email.com",
    group: "Licensed",
    division: "IL",
    region: "Midwest",
    userType: "Licensed",
    submitted: "05/23/2025",
    enabledDate: "05/23/2025",
    enabled: true,
  },
  {
    id: "1010",
    firstName: "Marlin",
    lastName: "Swordfish",
    email: "marlin.swordfish@email.com",
    group: "Recruiter",
    division: "NY",
    region: "Corporate",
    userType: "Recruiter",
    submitted: "05/25/2025",
    enabledDate: "05/26/2025",
    enabled: true,
  },
  {
    id: "1011",
    firstName: "Trout",
    lastName: "Bass",
    email: "trout.bass@email.com",
    group: "Forward",
    division: "CA",
    region: "West",
    userType: "Forward",
    submitted: "05/28/2025",
    enabledDate: "05/28/2025",
    enabled: true,
  },
  {
    id: "1012",
    firstName: "Eel",
    lastName: "Catfish",
    email: "eel.catfish@email.com",
    group: "Admin",
    division: "TX",
    region: "South",
    userType: "Admin",
    submitted: "06/01/2025",
    enabledDate: "06/02/2025",
    enabled: false,
  },
  {
    id: "1013",
    firstName: "Tilapia",
    lastName: "Milkfish",
    email: "tilapia.milkfish@email.com",
    group: "Licensed",
    division: "FL",
    region: "South",
    userType: "Licensed",
    submitted: "06/04/2025",
    enabledDate: "06/04/2025",
    enabled: true,
  },
  {
    id: "1014",
    firstName: "Bluefin",
    lastName: "Yellowtail",
    email: "bluefin.yellowtail@email.com",
    group: "Recruiter",
    division: "IL",
    region: "Midwest",
    userType: "Recruiter",
    submitted: "06/07/2025",
    enabledDate: "06/08/2025",
    enabled: true,
  },
];

console.log(users);
let page = 1;
const perPage = 10;

const tableBody = document.getElementById("userTableBody");
const pagination = document.getElementById("pagination");

function loadFilterOptions() {
  const regions = [
    ...new Set(
      users.map(function (user) {
        return user.region;
      }),
    ),
  ].sort();
  const divisions = [
    ...new Set(
      users.map(function (user) {
        return user.division;
      }),
    ),
  ].sort();

  const region = document.getElementById("regionFilter");
  const division = document.getElementById("divisionFilter");

  region.innerHTML = '<option value="all">All</option>';
  division.innerHTML = '<option value="all">All</option>';

  regions.forEach(function (item) {
    region.innerHTML += '<option value="' + item + '">' + item + "</option>";
  });

  divisions.forEach(function (item) {
    division.innerHTML += '<option value="' + item + '">' + item + "</option>";
  });
}

function filteredUsers() {
  const search = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();
  const searchField = document.getElementById("searchField").value;
  const status = document.getElementById("statusFilter").value;
  const region = document.getElementById("regionFilter").value;
  const division = document.getElementById("divisionFilter").value;

  return users.filter(function (user) {
    let matchesSearch = true;

    if (search !== "") {
      if (searchField === "all") {
        const rowText = [
          user.id,
          user.firstName,
          user.lastName,
          user.email,
          user.group,
          user.division,
          user.region,
          user.userType,
        ]
          .join(" ")
          .toLowerCase();

        matchesSearch = rowText.indexOf(search) !== -1;
      } else {
        matchesSearch =
          String(user[searchField] || "")
            .toLowerCase()
            .indexOf(search) !== -1;
      }
    }

    let matchesStatus = true;
    if (status === "enabled") matchesStatus = user.enabled === true;
    if (status === "disabled") matchesStatus = user.enabled === false;

    const matchesRegion = region === "all" || user.region === region;
    const matchesDivision = division === "all" || user.division === division;

    return matchesSearch && matchesStatus && matchesRegion && matchesDivision;
  });
}

function drawTable() {
  const list = filteredUsers();
  const totalPages = Math.max(1, Math.ceil(list.length / perPage));

  if (page > totalPages) page = totalPages;

  const start = (page - 1) * perPage;
  const rows = list.slice(start, start + perPage);

  tableBody.innerHTML = "";

  if (rows.length === 0) {
    tableBody.innerHTML =
      '<tr><td colspan="11" class="text-center py-5 text-secondary">No users found.</td></tr>';
  } else {
    rows.forEach(function (user) {
      const row = document.createElement("tr");

      if (!user.enabled) row.className = "table-light";

      row.innerHTML =
        "<td>" +
        user.id +
        "</td>" +
        "<td>" +
        user.firstName +
        "</td>" +
        "<td>" +
        user.lastName +
        "</td>" +
        '<td class="email-cell" title="' +
        user.email +
        '">' +
        user.email +
        "</td>" +
        "<td>" +
        user.group +
        "</td>" +
        "<td>" +
        user.division +
        "</td>" +
        "<td>" +
        user.region +
        "</td>" +
        "<td>" +
        user.userType +
        "</td>" +
        "<td>" +
        user.submitted +
        "</td>" +
        "<td>" +
        user.enabledDate +
        "</td>" +
        "<td>" +
        '<button class="action-btn edit-user" data-id="' +
        user.id +
        '" title="Edit"><i class="bi bi-pencil-square"></i></button>' +
        '<button class="action-btn toggle-user ' +
        (!user.enabled ? "disabled-user" : "") +
        '" data-id="' +
        user.id +
        '" title="' +
        (user.enabled ? "Disable" : "Enable") +
        '">' +
        '<i class="bi ' +
        (user.enabled ? "bi-slash-circle" : "bi-check-circle") +
        '"></i>' +
        "</button>" +
        "</td>";

      tableBody.appendChild(row);
    });
  }

  const from = list.length === 0 ? 0 : start + 1;
  const to = Math.min(start + perPage, list.length);

  document.getElementById("entryInfo").textContent =
    "Showing " + from + " to " + to + " of " + list.length + " entries";

  drawPagination(totalPages);
}

function drawPagination(totalPages) {
  let html = "";

  html +=
    '<li class="page-item ' +
    (page === 1 ? "disabled" : "") +
    '">' +
    '<button class="page-link" data-page="' +
    (page - 1) +
    '">Previous</button></li>';

  for (let i = 1; i <= totalPages; i++) {
    html +=
      '<li class="page-item ' +
      (page === i ? "active" : "") +
      '">' +
      '<button class="page-link" data-page="' +
      i +
      '">' +
      i +
      "</button></li>";
  }

  html +=
    '<li class="page-item ' +
    (page === totalPages ? "disabled" : "") +
    '">' +
    '<button class="page-link" data-page="' +
    (page + 1) +
    '">Next</button></li>';

  pagination.innerHTML = html;
}

function showMessage(message) {
  document.getElementById("toastBody").textContent = message;
  const toast = bootstrap.Toast.getOrCreateInstance(
    document.getElementById("appToast"),
  );
  toast.show();
}

function openEdit(id) {
  const user = users.find(function (item) {
    return item.id === id;
  });
  if (!user) return;

  document.getElementById("userModalTitle").textContent = "Edit User";
  document.getElementById("editingId").value = user.id;
  document.getElementById("firstName").value = user.firstName;
  document.getElementById("lastName").value = user.lastName;
  document.getElementById("email").value = user.email;
  document.getElementById("group").value = user.group;
  document.getElementById("division").value = user.division;
  document.getElementById("region").value = user.region;
  document.getElementById("userType").value = user.userType;

  bootstrap.Modal.getOrCreateInstance(
    document.getElementById("userModal"),
  ).show();
}

tableBody.addEventListener("click", function (e) {
  const editButton = e.target.closest(".edit-user");
  const toggleButton = e.target.closest(".toggle-user");

  if (editButton) {
    openEdit(editButton.dataset.id);
  }

  if (toggleButton) {
    const user = users.find(function (item) {
      return item.id === toggleButton.dataset.id;
    });

    if (!user) return;

    user.enabled = !user.enabled;
    showMessage(
      user.firstName +
        " " +
        user.lastName +
        " " +
        (user.enabled ? "enabled." : "disabled."),
    );
    drawTable();
  }
});

pagination.addEventListener("click", function (e) {
  const button = e.target.closest("button[data-page]");
  if (!button) return;

  const nextPage = Number(button.dataset.page);
  const totalPages = Math.max(1, Math.ceil(filteredUsers().length / perPage));

  if (nextPage >= 1 && nextPage <= totalPages) {
    page = nextPage;
    drawTable();
  }
});

document.getElementById("searchInput").addEventListener("input", function () {
  page = 1;
  drawTable();
});

["searchField", "statusFilter", "regionFilter", "divisionFilter"].forEach(
  function (id) {
    document.getElementById(id).addEventListener("change", function () {
      page = 1;
      drawTable();
    });
  },
);

document.getElementById("clearFilters").addEventListener("click", function () {
  document.getElementById("searchInput").value = "";
  document.getElementById("searchField").value = "all";
  document.getElementById("statusFilter").value = "all";
  document.getElementById("regionFilter").value = "all";
  document.getElementById("divisionFilter").value = "all";
  page = 1;
  drawTable();
});

document.getElementById("filterToggle").addEventListener("click", function () {
  document.getElementById("filtersGrid").classList.toggle("d-none");
});

document.getElementById("addUserBtn").addEventListener("click", function () {
  document.getElementById("userForm").reset();
  document.getElementById("editingId").value = "";
  document.getElementById("userModalTitle").textContent = "Add User";
});

document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("editingId").value;
  const formData = {
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    email: document.getElementById("email").value.trim(),
    group: document.getElementById("group").value,
    division: document.getElementById("division").value,
    region: document.getElementById("region").value,
    userType: document.getElementById("userType").value,
  };

  if (id) {
    const user = users.find(function (item) {
      return item.id === id;
    });
    if (user) {
      user.firstName = formData.firstName;
      user.lastName = formData.lastName;
      user.email = formData.email;
      user.group = formData.group;
      user.division = formData.division;
      user.region = formData.region;
      user.userType = formData.userType;
    }

    showMessage("User updated successfully.");
  } else {
    const now = new Date();
    const date =
      String(now.getMonth() + 1).padStart(2, "0") +
      "/" +
      String(now.getDate()).padStart(2, "0") +
      "/" +
      now.getFullYear();

    users.unshift({
      id: String(Math.floor(1000 + Math.random() * 9000)),
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      group: formData.group,
      division: formData.division,
      region: formData.region,
      userType: formData.userType,
      submitted: date,
      enabledDate: date,
      enabled: true,
    });

    showMessage("User added successfully.");
  }

  bootstrap.Modal.getInstance(document.getElementById("userModal")).hide();
  loadFilterOptions();
  page = 1;
  drawTable();
});

const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("sidebarBackdrop");

document.getElementById("sidebarToggle").addEventListener("click", function () {
  sidebar.classList.toggle("open");
  backdrop.classList.toggle("show");
});

backdrop.addEventListener("click", function () {
  sidebar.classList.remove("open");
  backdrop.classList.remove("show");
});

loadFilterOptions();
drawTable();
