let accountInfoList = [];

const accountCreator = (function () {
    const createAccount = function (name, balance) {
        accountInfoList.push({name: name, balance: balance});
    };

    return {
        createAccount: createAccount,
    };
})();

function createAccountHandler() {
    let name = document.getElementById("account").value;
    let balance = document.getElementById("deposit").value;
    accountCreator.createAccount(name, balance);
    displayAccounts();
}

function displayAccounts() {
    let result = [];
    const text = document.getElementById("mytextarea");

    for (let i = 0; i < accountInfoList.length; i++) {
        result[i] = `Account name: ${accountInfoList[i].name}   Balance: ${accountInfoList[i].balance}`;
    }
    text.value = result.join("\n");
}

window.onload = function () {
    document.getElementById("createBtn").onclick = createAccountHandler;
};
