const { ComprehendMedicalClient, DetectEntitiesV2Command } = require("@aws-sdk/client-comprehendmedical");
const { getDefaultCompilerOptions } = require("typescript");
var client= new  ComprehendMedicalClient()
const input = { // DetectEntitiesV2Request
    Text: "aspirin is required 20 mg po daily for 2 times as tab", // required
  };

async function getDetectionDetails(){
    let command = new DetectEntitiesV2Command(input);
    let response = await client.send(command);
    for (entity of response['Entities'])
        console.log(entity)

}

getDetectionDetails();


