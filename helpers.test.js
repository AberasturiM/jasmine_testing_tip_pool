describe("Helpers test", function () {
  beforeEach(function () {
    billAmtInput.value = 50;
    tipAmtInput.value = 10;
    submitPaymentInfo();
  });

  it("should sum total tip amount on sumPaymentTotal()", function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 40;

    submitPaymentInfo();

    expect(sumPaymentTotal("tipAmt")).toEqual(50);
  });

  it("should sum total bill amount on sumPaymentTotal()", function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 40;

    submitPaymentInfo();

    expect(sumPaymentTotal("billAmt")).toEqual(150);
  });

  it("should sum total tipPercent amount on sumPaymentTotal()", function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 40;

    submitPaymentInfo();

    expect(sumPaymentTotal("tipPercent")).toEqual(60);
  });

  it("should sum tip percent of a single tip on calculateTipPercent()", function () {
    expect(calculateTipPercent(100, 20)).toEqual(20);
    expect(calculateTipPercent(50, 25)).toEqual(50);
    expect(calculateTipPercent(50, 0)).toEqual(0);
  });

  it("should generate new td from value and append to tr on appendTd(tr, value)", function () {
    let newTr = document.createElement("tr");

    appendTd(newTr, "test");

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual("test");
  });

  it("should generate delete td and append to tr on appendDeleteBtn(tr, type)", function () {
    let newTr = document.createElement("tr");

    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual("X");
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
