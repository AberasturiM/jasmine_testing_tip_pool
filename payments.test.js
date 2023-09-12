describe("Payments test", function () {
  beforeEach(function () {
    billAmtInput.value = 50;
    tipAmtInput.value = 10;
  });

  it("should create a new payment on createPayment()", function () {
    let expectedPayment = {
      billAmt: "50",
      tipAmt: "10",
      tipPercent: 20,
    };

    expect(createCurPayment()).toEqual(expectedPayment);
  });

  it("should not create a new payment on createPayment() when values are empty", function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    let curPayment = createCurPayment();

    expect(curPayment).toEqual(undefined);
  });

  it("should add a new payment to allPayments on submitPaymentInfo()", function () {
    submitPaymentInfo();

    expect(paymentId).toEqual(1);
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(Number(allPayments["payment1"].billAmt)).toEqual(50);
    expect(Number(allPayments["payment1"].tipAmt)).toEqual(10);
    expect(allPayments["payment1"].tipPercent).toEqual(20);
  });

  it("should not add a new payment on submitPaymentInfo() if there is no Bill Amount input", function () {
    billAmtInput.value = "";
    submitPaymentInfo();

    expect(paymentId).toEqual(0);
    expect(Object.keys(allPayments).length).toEqual(0);
    expect(allPayments).toEqual({});
  });

  it("should update #paymentTable on appendPaymentTable()", function () {
    let curPayment = createCurPayment();

    appendPaymentTable(curPayment);

    let curTdList = document.querySelectorAll("#paymentTable td");

    expect(curTdList.length).toEqual(4);
    expect(curTdList[0].innerText).toEqual("$50");
    expect(curTdList[1].innerText).toEqual("$10");
    expect(curTdList[2].innerText).toEqual("20%");
    expect(curTdList[3].innerText).toEqual("X");
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    paymentId = 0;
    allPayments = {};
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
  });
});
