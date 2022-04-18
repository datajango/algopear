import { Test, TestingModule } from '@nestjs/testing';
import { PagePropsService } from './page-props.service';

describe('PagePropsService', () => {
  let service: PagePropsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PagePropsService],
    }).compile();

    service = module.get<PagePropsService>(PagePropsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
