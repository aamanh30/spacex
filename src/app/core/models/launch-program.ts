export interface LaunchProgram {
  flight_number: number;
  mission_name: string;
  mission_id: any[];
  upcoming: boolean;
  launch_year: string;
  launch_success: boolean;
  landing_success: boolean;
  links: LaunchProgramLinks;
}

export interface LaunchProgramLinks {
  mission_patch: string;
  mission_patch_small: string;
}
