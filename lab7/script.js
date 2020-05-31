let accountInfoList = [];

const accountCreator = (function () {
    const createAccount = function () {
        let account = {};
        account.name = document.getElementById("account").value;
        account.balance = document.getElementById("deposit").value;
        accountInfoList.push(account);
    };

    return {
        createAccount: createAccount,
    };
})();

function createAccountHandler() {
    accountCreator.createAccount();
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
