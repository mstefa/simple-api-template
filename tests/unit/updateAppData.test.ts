import { AppDataUpdateRequest} from './../../src/controllers/dtos/AppDataUpdateRequest';
import { UpdateAppData } from './../../src/services/UpdateAppData';
import { AppDataRepositoryMock } from "./mocks/AppDataRepositoryMock";
import { AppVersionRepositoryMock } from "./mocks/AppVersionRepositoryMock";


let appDataRepository: AppDataRepositoryMock;
let appVersionRepository: AppVersionRepositoryMock;
let updateAppData: UpdateAppData;


beforeEach(() => {
  appDataRepository = new AppDataRepositoryMock();
  appVersionRepository = new AppVersionRepositoryMock();

  updateAppData = new UpdateAppData(appDataRepository, appVersionRepository);
});

describe('Update app Data', () => {
  it('should create a update the app data and save the version update', async () => {

      const appid = "8299bee1-1250-4eba-9154-fd3b5680b2c7";
      const appDataRequest = requestCreator();
      await updateAppData.run(appid,appDataRequest )

      appDataRepository.assertLastSavedAppDataIs(appid);
      appVersionRepository.assertLastSavedAppVersionIs(appid);
  })
})


const requestCreator = ():AppDataUpdateRequest  => {

  const request = {
    
    requested_by: "Matias",
    request_date: "2022-05-28T20:27:20.670Z",
    aproved_by: "Lucia",
    aprove_date: "2022-05-29T20:27:20.670Z",
    metadata: {
      name: "Users manager",
      owner: "Lucia",
      manager: "Matias",
  },
  technical_data: {
    roles: [
      {
        name: "admin",
        permissions: ["read", "write"],
      },
      {
        name: "operator",
        permissions: ["read"],
      }
      ]
    }
  }
  
  return request
}