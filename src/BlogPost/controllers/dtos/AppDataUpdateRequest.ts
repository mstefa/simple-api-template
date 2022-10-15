export type AppDataUpdateRequest = {
  requested_by: string;
  request_date: string;
  approved_by: string;
  approve_date: string;
  metadata?: {
    name?: string;
    owner?: string;
    manager?: string;
  };
  technical_data: {
    roles?: string[];
  };
};
