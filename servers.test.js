describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(serverId).toEqual(1);
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should not add a new server on submitServerInfo() if there is no input", function () {
    serverNameInput.value = "";
    submitServerInfo();

    expect(serverId).toEqual(0);
    expect(Object.keys(allServers).length).toEqual(0);
    expect(allServers).toEqual({});
  });

  it("should update #serverTable on updateServerTable()", function () {
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll("#serverTable td");

    expect(curTdList.length).toEqual(3);
    expect(curTdList[0].innerText).toEqual("Alice");
    expect(curTdList[1].innerText).toEqual("$0.00");
    expect(curTdList[2].innerText).toEqual("X");
  });

  afterEach(function () {
    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = {};
  });
});
