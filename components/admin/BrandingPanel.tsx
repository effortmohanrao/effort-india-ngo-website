import MediaSlotManager from "./MediaSlotManager";

export default function BrandingPanel() {
  return (
    <div className="p-6">
      <h2 className="text-lg font-bold text-slate-800">Branding</h2>
      <p className="text-xs text-slate-500 mt-0.5 mb-5">
        Site-wide logo, shown in the header on every page. Not tied to any single page section.
      </p>

      <div className="max-w-xs">
        <MediaSlotManager prefix="logo" label="Site Logo" multiple={false} />
      </div>
    </div>
  );
}
