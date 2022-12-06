const spinPath = "/home/spin/src/github.com/Shopify";

const defaultOptions = {
  remoteHost: "",
  basePath: "",
  insidersBuild: false,
  useSpin: false,
  debug: false,
};

function showSpinPath(shouldShow) {
  document.getElementById("basePath").toggleAttribute("hidden", shouldShow)
  document.getElementById("basePathSpin").toggleAttribute("hidden", !shouldShow)
}

let previousTimeout = undefined;

// type: "success" | "danger" | "warning"
function showAlert(type, message, time) {
    if (previousTimeout !== undefined)
      clearTimeout(previousTimeout);

    const status = document.querySelector(".alert");
    status.classList.remove("show");
    ["success", "danger", "warning"].map((v) => status.classList.remove(`alert-${v}`));

    const statusClass = status.className;

    status.textContent = message;
    status.classList.add(`alert-${type}`)
    status.classList.add("show")
    status.className = `alert-${type} ${status.className} show`;

    previousTimeout = setTimeout(() => {
      status.className = statusClass;
    }, time);
}

function restoreOptions() {
  document.getElementById("basePathSpin").value = spinPath;

  chrome.storage.sync.get(defaultOptions, (options) => {
    document.getElementById("remoteHost").value = options.remoteHost;
    document.getElementById("basePath").value = options.basePath;
    document.getElementById("useSpin").checked = options.useSpin;
    document.getElementById("insidersBuild").checked = options.insidersBuild;
    document.getElementById("debug").checked = options.debug;

    showSpinPath(options.useSpin);
  });
}

function saveOptions(event) {
  event.preventDefault();

  const options = {
    remoteHost: document.getElementById("remoteHost").value,
    basePath: document.getElementById("basePath").value,
    useSpin: document.getElementById("useSpin").checked,
    spinPath,
    insidersBuild: document.getElementById("insidersBuild").checked,
    debug: document.getElementById("debug").checked,
  };

  if(options.useSpin && (!options.remoteHost?.trim()?.length)) {
    return showAlert("danger", "Please include a remote host when using Spin.", 2000)
  }

  chrome.storage.sync.set(
    options,
    () => showAlert("success", "Settings saved!", 2000)
  );
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("change", saveOptions);
document.getElementById("useSpin").addEventListener("change", function() {
  showSpinPath(this.checked);
})
