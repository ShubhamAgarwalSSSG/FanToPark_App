describe("test", function () {
  it("test", async function () {
    await browser.pause(3000); // Pause to allow the app to load

    const enter_phone = await $(
      '//android.widget.Button[@content-desc="Enter Mobile Number"]'
    );

    // Click the button
    await enter_phone.click();
    // await enter_phone.setvalue("8171194103");

    await browser.pause(3000);

    console.log("Clicked the 'Enter Mobile Number' button successfully.");
  });
  it("test_2", async function () {
    await browser.pause(3000); // Pause to allow the app to load

    const enter_phone_field = await $("//android.widget.EditText");

    // Click the button
    await enter_phone_field.click();
    await enter_phone_field.setValue("8171194103");

    await browser.pause(3000);

    console.log(
      "Clicked the 'Enter Mobile Number' button successfully........>>>>>>>>>>"
    );
  });
  it("test_3", async function () {
    await browser.pause(1000); // Pause to allow the app to load

    const send_otp = await $(
      '//android.widget.Button[@content-desc="Send Code"]'
    );

    // Click the button
    await send_otp.click();
    // await enter_phone.setvalue("8171194103");

    await browser.pause(1000);

    console.log(
      "Clicked the 'Enter Mobile Number' button successfully.............."
    );
  });
});
