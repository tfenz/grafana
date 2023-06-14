export default class FakeSchemaData {
  static getLogAnalyticsFakeSchema() {
    return {
      Tables: [
        {
          TableName: 'Table_0',
          Columns: [
            {
              ColumnName: 'TableName',
              DataType: 'String',
            },
            {
              ColumnName: 'ColumnName',
              DataType: 'String',
            },
            {
              ColumnName: 'ColumnType',
              DataType: 'String',
            },
          ],
          Rows: [
            ['AzureNetworkAnalytics_CL', 'SourceSystem', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'ManagementGroupName', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'TimeGenerated', 'System.DateTime'],
            ['AzureNetworkAnalytics_CL', 'Computer', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'FASchemaVersion_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'FlowType_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'SrcIP_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'DestIP_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'VMIP_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'L4Protocol_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'L7Protocol_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'FlowDirection_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'NSGList_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'NSGRules_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'HopNSGList_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'HopNSGRules_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'Region1_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'Region2_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'NIC_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'NIC1_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'NIC2_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'VM_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'VM1_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'VM2_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'Subnet_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'ConnectionName_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'S2SConnection_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'S2SConnectionType_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'Country_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'AzureRegion_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'Subscription1_g', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'Subscription2_g', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'FlowStartTime_t', 'System.DateTime'],
            ['AzureNetworkAnalytics_CL', 'FlowEndTime_t', 'System.DateTime'],
            ['AzureNetworkAnalytics_CL', 'DestPort_d', 'System.Double'],
            ['AzureNetworkAnalytics_CL', 'AllowedInFlows_d', 'System.Double'],
            ['AzureNetworkAnalytics_CL', 'DeniedInFlows_d', 'System.Double'],
            ['AzureNetworkAnalytics_CL', 'AllowedOutFlows_d', 'System.Double'],
            ['AzureNetworkAnalytics_CL', 'DeniedOutFlows_d', 'System.Double'],
            ['AzureNetworkAnalytics_CL', 'DeniedInFlowsAtHops_d', 'System.Double'],
            ['AzureNetworkAnalytics_CL', 'DeniedOutFlowsAtHops_d', 'System.Double'],
            ['AzureNetworkAnalytics_CL', 'FlowCount_d', 'System.Double'],
            ['AzureNetworkAnalytics_CL', 'NextHopIP_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'IsVirtualAppliance_b', 'System.Boolean'],
            ['AzureNetworkAnalytics_CL', 'AddressPrefix_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'NextHopType_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'RouteTable_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'Subnet1_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'Subnet2_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'SubnetRegion1_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'SubnetRegion2_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'VirtualAppliances_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'AllowForwardedTraffic_b', 'System.Boolean'],
            ['AzureNetworkAnalytics_CL', 'AllowGatewayTransit_b', 'System.Boolean'],
            ['AzureNetworkAnalytics_CL', 'AllowVirtualNetworkAccess_b', 'System.Boolean'],
            ['AzureNetworkAnalytics_CL', 'UseRemoteGateways_b', 'System.Boolean'],
            ['AzureNetworkAnalytics_CL', 'NSG_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'PrivateIPAddresses_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'PublicIPAddresses_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'Subnetwork_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'VirtualMachine_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'MACAddress_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'AddressPrefixes_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'ConnectingVirtualNetwork_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'RemoteVirtualNetworkGateway_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'IsFlowEnabled_b', 'System.Boolean'],
            ['AzureNetworkAnalytics_CL', 'GatewayType_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'SKU_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'VIPAddress_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'VirtualSubnetwork_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'BGPEnabled_b', 'System.Boolean'],
            ['AzureNetworkAnalytics_CL', 'ConnectionStatus_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'ConnectionType_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'GatewayConnectionType_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'LocalNetworkGateway_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'VirtualNetwork1_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'VirtualNetwork2_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'VirtualNetworkGateway1_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'VirtualNetworkGateway2_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'VirtualNetworkRegion1_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'VirtualNetworkRegion2_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'EgressBytesTransferred_d', 'System.Double'],
            ['AzureNetworkAnalytics_CL', 'IngressBytesTransferred_d', 'System.Double'],
            ['AzureNetworkAnalytics_CL', 'RoutingWeight_d', 'System.Double'],
            ['AzureNetworkAnalytics_CL', 'FrontendSubnet_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'LoadBalancerType_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'Access_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'Description_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'DestinationAddressPrefix_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'DestinationPortRange_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'Direction_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'Protocol_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'RuleType_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'SourceAddressPrefix_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'SourcePortRange_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'Priority_d', 'System.Double'],
            ['AzureNetworkAnalytics_CL', 'IPAddress', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'SubnetPrefixes_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'SchemaVersion_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'Name_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'Region_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'AppGatewayType_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'BackendSubnets_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'FrontendIPs_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'GatewaySubnet_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'ComponentType_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'DiscoveryRegion_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'ResourceType', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'Status_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'SubType_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'TopologyVersion_s', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'Subscription_g', 'System.String'],
            ['AzureNetworkAnalytics_CL', 'TimeProcessed_t', 'System.DateTime'],
            ['AzureNetworkAnalytics_CL', 'Type', 'System.String'],
          ],
          KqlPrimaryTimestampColumnName: 'TimeGenerated',
        },
        {
          TableName: 'Table_1',
          Columns: [
            {
              ColumnName: 'TableType',
              DataType: 'String',
            },
            {
              ColumnName: 'TableName',
              DataType: 'String',
            },
            {
              ColumnName: 'PrimaryTimestampColumnName',
              DataType: 'String',
            },
            {
              ColumnName: 'Solutions',
              DataType: 'String',
            },
          ],
          Rows: [['oms', 'AzureNetworkAnalytics_CL', 'TimeGenerated', 'LogManagement']],
        },
      ],
    };
  }

  static getlogAnalyticsFakeMetadata() {
    return {
      tables: [
        {
          id: 't/Alert',
          name: 'Alert',
          timespanColumn: 'TimeGenerated',
          columns: [
            { name: 'TimeGenerated', type: 'datetime' },
            { name: 'AlertSeverity', type: 'string' },
            { name: 'SourceDisplayName', type: 'string' },
            { name: 'AlertName', type: 'string' },
            { name: 'AlertDescription', type: 'string' },
            { name: 'SourceSystem', type: 'string' },
            { name: 'QueryExecutionStartTime', type: 'datetime' },
            { name: 'QueryExecutionEndTime', type: 'datetime' },
            { name: 'Query', type: 'string' },
            { name: 'RemediationJobId', type: 'string' },
            { name: 'RemediationRunbookName', type: 'string' },
            { name: 'AlertRuleId', type: 'string' },
            { name: 'AlertRuleInstanceId', type: 'string' },
            { name: 'ThresholdOperator', type: 'string' },
            { name: 'ThresholdValue', type: 'int' },
            { name: 'LinkToSearchResults', type: 'string' },
            { name: 'ServiceDeskConnectionName', type: 'string' },
            { name: 'ServiceDeskId', type: 'string' },
            { name: 'ServiceDeskWorkItemLink', type: 'string' },
            { name: 'ServiceDeskWorkItemType', type: 'string' },
            { name: 'ResourceId', type: 'string' },
            { name: 'ResourceType', type: 'string' },
            { name: 'ResourceValue', type: 'string' },
            { name: 'RootObjectName', type: 'string' },
            { name: 'ObjectDisplayName', type: 'string' },
            { name: 'Computer', type: 'string' },
            { name: 'AlertPriority', type: 'string' },
            { name: 'SourceFullName', type: 'string' },
            { name: 'AlertId', type: 'string' },
            { name: 'RepeatCount', type: 'int' },
            { name: 'AlertState', type: 'string' },
            { name: 'ResolvedBy', type: 'string' },
            { name: 'LastModifiedBy', type: 'string' },
            { name: 'TimeRaised', type: 'datetime' },
            { name: 'TimeResolved', type: 'datetime' },
            { name: 'TimeLastModified', type: 'datetime' },
            { name: 'AlertContext', type: 'string' },
            { name: 'TicketId', type: 'string' },
            { name: 'Custom1', type: 'string' },
            { name: 'Custom2', type: 'string' },
            { name: 'Custom3', type: 'string' },
            { name: 'Custom4', type: 'string' },
            { name: 'Custom5', type: 'string' },
            { name: 'Custom6', type: 'string' },
            { name: 'Custom7', type: 'string' },
            { name: 'Custom8', type: 'string' },
            { name: 'Custom9', type: 'string' },
            { name: 'Custom10', type: 'string' },
            { name: 'ManagementGroupName', type: 'string' },
            { name: 'PriorityNumber', type: 'int' },
            { name: 'HostName', type: 'string' },
            { name: 'StateType', type: 'string' },
            { name: 'AlertTypeDescription', type: 'string' },
            { name: 'AlertTypeNumber', type: 'int' },
            { name: 'AlertError', type: 'string' },
            { name: 'StatusDescription', type: 'string' },
            { name: 'AlertStatus', type: 'int' },
            { name: 'TriggerId', type: 'string' },
            { name: 'Url', type: 'string' },
            { name: 'ValueDescription', type: 'string' },
            { name: 'AlertValue', type: 'int' },
            { name: 'Comments', type: 'string' },
            { name: 'TemplateId', type: 'string' },
            { name: 'FlagsDescription', type: 'string' },
            { name: 'Flags', type: 'int' },
            { name: 'ValueFlagsDescription', type: 'string' },
            { name: 'ValueFlags', type: 'int' },
            { name: 'Expression', type: 'string' },
            { name: 'Type', type: 'string' },
          ],
        },
        {
          id: 't/AzureActivity',
          name: 'AzureActivity',
          timespanColumn: 'TimeGenerated',
          columns: [
            { name: 'OperationName', type: 'string' },
            { name: 'Level', type: 'string' },
            { name: 'ActivityStatus', type: 'string' },
            { name: 'ActivitySubstatus', type: 'string' },
            { name: 'ResourceGroup', type: 'string' },
            { name: 'SubscriptionId', type: 'string' },
            { name: 'CorrelationId', type: 'string' },
            { name: 'Caller', type: 'string' },
            { name: 'CallerIpAddress', type: 'string' },
            { name: 'Category', type: 'string' },
            { name: 'HTTPRequest', type: 'string' },
            { name: 'Properties', type: 'string' },
            { name: 'EventSubmissionTimestamp', type: 'datetime' },
            { name: 'Authorization', type: 'string' },
            { name: 'ResourceId', type: 'string' },
            { name: 'OperationId', type: 'string' },
            { name: 'ResourceProvider', type: 'string' },
            { name: 'Resource', type: 'string' },
            { name: 'TimeGenerated', type: 'datetime' },
            { name: 'SourceSystem', type: 'string' },
            { name: 'Type', type: 'string' },
          ],
        },
      ],
      tableGroups: [
        {
          id: 'oms/LogManagement',
          name: 'LogManagement',
          source: 'oms',
          tables: ['t/Alert', 't/AzureActivity'],
        },
      ],
      functions: [
        {
          id: 'f/Func1',
          name: 'Func1',
          displayName: 'Func1',
          body: 'AzureActivity\n| where ActivityStatus == "" \n',
          category: 'test',
        },
        {
          id: '19551c5e-1e3e-4425-a1d7-c846a0bca2a1',
          name: '_AzureBackup_GetVaults',
          displayName: '_AzureBackup_GetVaults',
          description:
            'Returns the list of Recovery Sevices vaults in your Azure environment that are associated with the workspace',
          body: '// Params\r\nlet _RangeStart = iff((isnull(RangeStart)), startofday(ago(1d)), startofday(RangeStart));\r\nlet _RangeEnd = iff((isnull(RangeEnd)), startofday(now()), startofday(RangeEnd) + 1d);\r\nlet _VaultSubscriptionList = split(VaultSubscriptionList, \',\');\r\nlet _VaultLocationList = split(VaultLocationList, \',\');\r\nlet _VaultList = split(VaultList, \',\');\r\nlet _VaultTypeList = split(VaultTypeList, \',\');\r\nlet _ExcludeLegacyEvent = ExcludeLegacyEvent;\r\n// Other Vars\r\nlet AsonDay =  _RangeEnd-1d;\r\n// Source Tables\r\nlet VaultUnderAzureDiagnostics = ()\r\n{\r\nAzureDiagnostics\r\n// Take records until previous day\r\n| where TimeGenerated >= _RangeStart and TimeGenerated <= _RangeEnd and TimeGenerated < startofday(now())\r\n| where Category == "AzureBackupReport" and OperationName == "Vault" and columnifexists("SchemaVersion_s", "") == "V2"\r\n| project VaultName = columnifexists("VaultName_s", ""), VaultUniqueId = columnifexists("VaultUniqueId_s", ""), VaultTags = columnifexists("VaultTags_s", ""), AzureDataCenter =  columnifexists("AzureDataCenter_s", ""), ResourceGroupName =  columnifexists("ResourceGroupName_s", ""), SubscriptionId = toupper(SubscriptionId), StorageReplicationType = columnifexists("StorageReplicationType_s", ""), ResourceId, TimeGenerated \r\n| where SubscriptionId in~ (_VaultSubscriptionList) or \'*\' in (_VaultSubscriptionList)\r\n| where AzureDataCenter in~ (_VaultLocationList) or \'*\' in (_VaultLocationList)\r\n| where VaultName in~  (_VaultList) or \'*\' in (_VaultList)\r\n| summarize arg_max(TimeGenerated, *) by ResourceId\r\n| project StorageReplicationType, VaultUniqueId, VaultName, VaultTags, SubscriptionId, ResourceGroupName, AzureDataCenter, ResourceId, TimeGenerated\r\n};\r\nlet VaultUnderResourceSpecific = ()\r\n{\r\nCoreAzureBackup\r\n// Take records until previous day\r\n| where TimeGenerated >= _RangeStart and TimeGenerated <= _RangeEnd and TimeGenerated < startofday(now())\r\n| where OperationName == "Vault" \r\n| project StorageReplicationType, VaultUniqueId, VaultName, VaultTags, SubscriptionId = toupper(SubscriptionId), ResourceGroupName, AzureDataCenter, ResourceId, TimeGenerated \r\n| where SubscriptionId in~ (_VaultSubscriptionList) or \'*\' in (_VaultSubscriptionList)\r\n| where AzureDataCenter in~ (_VaultLocationList) or \'*\' in (_VaultLocationList)\r\n| where VaultName in~  (_VaultList) or \'*\' in (_VaultList)\r\n| summarize arg_max(TimeGenerated, *) by ResourceId\r\n};\r\nlet VaultHistoryUnderAzureDiagnostics = ()\r\n{\r\nAzureDiagnostics\r\n// Take records until previous day\r\n| where TimeGenerated >= _RangeStart and TimeGenerated <= _RangeEnd and TimeGenerated < startofday(now())\r\n| where Category == "AzureBackupReport" and OperationName == "Vault" and columnifexists("SchemaVersion_s", "") == "V2"\r\n| project VaultName = columnifexists("VaultName_s", ""), VaultUniqueId = columnifexists("VaultUniqueId_s", ""), VaultTags = columnifexists("VaultTags_s", ""), AzureDataCenter =  columnifexists("AzureDataCenter_s", ""), ResourceGroupName =  columnifexists("ResourceGroupName_s", ""), SubscriptionId = toupper(SubscriptionId), StorageReplicationType = columnifexists("StorageReplicationType_s", ""), ResourceId, TimeGenerated \r\n| where SubscriptionId in~ (_VaultSubscriptionList) or \'*\' in (_VaultSubscriptionList)\r\n| where AzureDataCenter in~ (_VaultLocationList) or \'*\' in (_VaultLocationList)\r\n| where VaultName in~  (_VaultList) or \'*\' in (_VaultList)\r\n| summarize arg_max(TimeGenerated, *) by ResourceId, startofday(TimeGenerated)\r\n| project StorageReplicationType, VaultUniqueId, VaultName, VaultTags, SubscriptionId, ResourceGroupName, AzureDataCenter, ResourceId, TimeGenerated = TimeGenerated1\r\n};\r\nlet VaultHistoryUnderResourceSpecific = ()\r\n{\r\nCoreAzureBackup\r\n// Take records until previous day\r\n| where TimeGenerated >= _RangeStart and TimeGenerated <= _RangeEnd and TimeGenerated < startofday(now())\r\n| where OperationName == "Vault" \r\n| project StorageReplicationType, VaultUniqueId, VaultName, VaultTags, SubscriptionId = toupper(SubscriptionId), ResourceGroupName, AzureDataCenter, ResourceId, TimeGenerated \r\n| where SubscriptionId in~ (_VaultSubscriptionList) or \'*\' in (_VaultSubscriptionList)\r\n| where AzureDataCenter in~ (_VaultLocationList) or \'*\' in (_VaultLocationList)\r\n| where VaultName in~  (_VaultList) or \'*\' in (_VaultList)\r\n| summarize arg_max(TimeGenerated, *) by ResourceId, startofday(TimeGenerated)\r\n| project StorageReplicationType, VaultUniqueId, VaultName, VaultTags, SubscriptionId, ResourceGroupName, AzureDataCenter, ResourceId, TimeGenerated = TimeGenerated1\r\n};\r\nlet Vault_LatestTable = () {union isfuzzy = true \r\n(VaultUnderAzureDiagnostics() | where _ExcludeLegacyEvent == false),\r\n(VaultUnderResourceSpecific())\r\n// To show as per as on \'AsonDay\'\r\n| where startofday(TimeGenerated) == AsonDay\r\n| summarize arg_max(TimeGenerated, *)   by VaultUniqueId\r\n| project StorageReplicationType, VaultUniqueId, VaultName, VaultTags, SubscriptionId, ResourceGroupName, AzureDataCenter, ResourceId, TimeGenerated};\r\nlet Vault_HistoryTable = () {union isfuzzy = true \r\n(VaultHistoryUnderAzureDiagnostics() | where _ExcludeLegacyEvent == false),\r\n(VaultHistoryUnderResourceSpecific())\r\n| summarize arg_max(TimeGenerated, *)   by VaultUniqueId, startofday(TimeGenerated)\r\n| project StorageReplicationType, VaultUniqueId, VaultName, VaultTags, SubscriptionId, ResourceGroupName, AzureDataCenter, ResourceId, TimeGenerated = TimeGenerated1};\r\n// FinalTable From V1 Vault\r\nlet FinalTable_V1Vault = () {union (Vault_LatestTable | where (_RangeEnd-_RangeStart == 1d)), (Vault_HistoryTable | where (_RangeEnd-_RangeStart > 1d))\r\n| project UniqueId = VaultUniqueId, Name = VaultName, Id = ResourceId, SubscriptionId, Location = AzureDataCenter, VaultStore_StorageReplicationType = StorageReplicationType, Tags = VaultTags,  TimeGenerated, Type = "Microsoft.RecoveryServices/vaults"\r\n};\r\n// FinalTable_DPPVault to be added later\r\nFinalTable_V1Vault \r\n| where "Microsoft.RecoveryServices/vaults" in~ (_VaultTypeList) or \'*\' in (_VaultTypeList)',
          parameters:
            'RangeStart:datetime = datetime(null), VaultSubscriptionList:string="*", ExcludeLegacyEvent:bool=True',
          related: {
            solutions: ['LogManagement'],
            categories: ['Management'],
            tables: ['AzureDiagnostics', 'CoreAzureBackup'],
          },
        },
      ],
      applications: [],
      workspaces: [
        {
          id: 'a2c1b44e-3e57-4410-b027-999999999999',
          name: 'danieltest',
          resourceId:
            '/subscriptions/44693801-6ee6-49de-9b2d-999999999999/resourceGroups/danieltest/providers/' +
            'microsoft.operationalinsights/workspaces/danieltest',
          tables: [],
          tableGroups: ['oms/LogManagement'],
          functions: ['f/Func1'],
        },
      ],
    };
  }
}
